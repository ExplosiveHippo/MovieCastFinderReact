import { FETCH_FIRST_MOVIE } from '../actions/index';

export default function(state=[], action){
	console.log('action: ', action);

	switch(action.type) {
		case FETCH_FIRST_MOVIE:
			// Only return 5 at a time
			return action.payload.data.results.splice(0, 5);
	}

	return state;
}