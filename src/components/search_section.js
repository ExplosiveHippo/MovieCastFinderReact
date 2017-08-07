import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFirstMovie } from '../actions/index';
import { bindActionCreators } from 'redux';

class SearchSection extends Component {

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

	renderLiveSearch() {
		console.log("props movie: ", this.props.movies);
		return this.props.movies.map((movie) => {
			return(
				<li key={movie.id} className="list-group-item">
					<button onClick={selectMove()}>{movie.title}</button>
				</li>
			)
		});
	}

	render() {
		//console.log(this.state.movies);
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">
				<div className="form-group">
			    	<label htmlFor="movie1">Movie 1</label>
			    	<input 
			    		type="text" 
			    		className="form-control" 
			    		id="movie1" 
			    		placeholder="Movie 1"
			    		value={this.state.term}
			    		onChange={this.onInputChange} />
			    		<ul>
			    			{this.renderLiveSearch()}
		    			</ul>
		 	 	</div>
		 	 	<button type="submit" className="btn btn-default">Search</button>
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


export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);