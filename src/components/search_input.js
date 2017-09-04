import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLiveSearch } from '../actions/index';
import { fetchActors } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchInput extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstMovieTerm: '',
			firstMovieId: '',
			secondMovieTerm: '',
			showLiveSearch: 'true'
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.onSecondInputChange = this.onSecondInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({'firstMovieTerm': event.target.value});
		if(event.target.value.length >= 3) {
			this.setState({'showLiveSearch': true });
			this.props.fetchLiveSearch(this.state.firstMovieTerm, event.target.id);
		}else{
			this.setState({'showLiveSearch': false });
		}
	}

	onSecondInputChange(event) {
		this.setState({'secondMovieTerm': event.target.value});
		if(event.target.value.length >= 3) {
			this.setState({'showSecondLiveSearch': true });
			this.props.fetchLiveSearch(this.state.secondMovieTerm, event.target.id);
		}else{
			this.setState({'showSecondLiveSearch': false });
		}
	}

	onFormSubmit(event) {
		event.preventDefault();
		if(this.state.firstMovieId && this.state.secondMovieId){
			this.props.fetchActors(this.state.firstMovieId, this.state.secondMovieId);
		}
	}

	selectMovie(movie) {
		this.setState({'firstMovieTerm': movie.title, 'firstMovieId': movie.id, 'showLiveSearch': false});
	}

	selectSecondMovie(movie) {
		this.setState({'secondMovieTerm': movie.title, 'secondMovieId': movie.id, 'showSecondLiveSearch': false});
	}

	renderLiveSearch() {
		if(this.state.showLiveSearch){
			return this.props.movies.map((movie) => {
				return(
					<li key={movie.id} className="list-group-item">
						<button type="button" onClick={() => this.selectMovie(movie)}>{movie.title}</button>
					</li>
				)
			});
		}
	}

	renderSecondLiveSearch() {
		if(this.state.showSecondLiveSearch){
			return this.props.movies.map((movie) => {
				return(
					<li key={movie.id} className="list-group-item">
						<button type="button" onClick={() => this.selectSecondMovie(movie)}>{movie.title}</button>
					</li>
				)
			});
		}
	}

	render() {

		const randId = Math.random().toString(36).substr(2, 10);
		const randId2 = Math.random().toString(36).substr(2, 10);
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<div className="form-group">

	    			<label htmlFor={randId}>Movie</label>
			    	<input 
			    		type="text" 
			    		className="form-control" 
			    		id={randId}
			    		placeholder="First Movie"
			    		value={this.state.firstMovieTerm}
			    		onChange={this.onInputChange} />
			    		<ul>
			    			{this.renderLiveSearch()}
		    			</ul>

		    			<label htmlFor={randId2}>Movie 2</label>
		    			<input 
				    		type="text" 
				    		className="form-control" 
				    		id={randId2}
				    		placeholder="Second Movie"
				    		value={this.state.secondMovieTerm}
				    		onChange={this.onSecondInputChange} />
				    		<ul>
			    				{this.renderSecondLiveSearch()}
		    				</ul>

		 	 	</div>
		 	 	<button type="submit" className="btn btn-default">Search</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {
		movies: state.movies,
		firstMovie: state.firstMovie
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchLiveSearch: fetchLiveSearch, fetchActors: fetchActors}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);