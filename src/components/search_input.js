import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFirstMovie } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchInput extends Component {

	constructor(props) {
		super(props);
		this.state = {term: ''};

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({term: event.target.value});
		if(event.target.value.length > 3) {
			this.props.fetchFirstMovie(this.state.term);
		}
	}

	onFormSubmit(event) {
		event.preventDefault();
		//this.props.fetchFirstMovie(this.state.term);
	}

	selectMovie() {

	}

	renderLiveSearch() {
		console.log("props movie: ", this.props.movies);
		return this.props.movies.map((movie) => {
			return(
				<li key={movie.id} className="list-group-item">
					<button onClick={this.selectMovie()}>{movie.title}</button>
				</li>
			)
		});
	}

	render() {
		//console.log(this.state.movies);
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
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {
		movies: state.movies
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchFirstMovie: fetchFirstMovie}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);