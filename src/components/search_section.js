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
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.fetchFirstMovie(this.state.term);

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
			    		value={this.state.term}
			    		placeholder="Movie 1"
			    		onChange={this.onInputChange} />
		 	 	</div>
		 	 	<button type="submit" className="btn btn-default">Search</button>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return{
		movies: state.movies
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchFirstMovie: fetchFirstMovie}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchSection);