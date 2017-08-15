import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFirstMovie } from '../actions/index';
import { selectFirstMovie } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchInput extends Component {

	constructor(props) {
		super(props);
		this.state = {
			term: '',
			movieId: '',
			showLiveSearch: 'true'
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({'term': event.target.value, 'showLiveSearch': true });
		if(event.target.value.length > 3) {
			this.props.fetchFirstMovie(this.state.term);
		}
	}

	onFormSubmit(event) {
		event.preventDefault();
		if(this.state.movieId){
			this.props.selectFirstMovie(this.state.movieId);
		}
	}

	selectMovie(movie) {
		this.setState({'term': movie.title, 'movieId': movie.id, 'showLiveSearch': false});
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

	render() {
		console.log(this.props);
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<div className="form-group">
	    			<label htmlFor="movie2">Movie</label>
			    	<input 
			    		type="text" 
			    		className="form-control" 
			    		id="movie2" 
			    		placeholder="Movie"
			    		value={this.state.term}
			    		onChange={this.onInputChange} />
			    		<ul>
			    			{this.renderLiveSearch()}
		    			</ul>
		 	 	</div>
		 	 	<button type="submit" onClick={() => this.onFormSubmit(event)} className="btn btn-default">Search</button>
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
	return bindActionCreators({fetchFirstMovie: fetchFirstMovie, selectFirstMovie: selectFirstMovie}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);