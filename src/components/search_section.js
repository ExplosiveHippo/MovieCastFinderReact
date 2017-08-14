import React, { Component } from 'react';
import SearchInput from './search_input';

export default class SearchSection extends Component {

	render() {
		//console.log(this.state.movies);
		return (
			<div>
				<SearchInput />
				<button type="submit" className="btn btn-default">Search</button>
			</div>
		);
	}
}
