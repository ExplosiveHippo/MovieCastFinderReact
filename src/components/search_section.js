import React, { Component } from 'react';

export default class SearchSection extends Component {


	render() {
		return (

			<form>
				<div class="form-group">
			    	<label for="movie1">Movie 1</label>
			    	<input type="text" class="form-control" id="movie1" placeholder="Movie 1" />
		 	 	</div>
		 	 	<div class="form-group">
			    	<label for="movie2">Movie 2</label>
			    	<input type="text" class="form-control" id="movie2" placeholder="Movie 2" />
		 	 	</div>
		 	 	<button type="submit" class="btn btn-default">Search</button>
			</form>
		);
	}
}