import { FETCH_LIVE_SEARCH } from '../actions/index';

export default function(state=[], action){
	console.log('action: ', action);

	switch(action.type) {
		case FETCH_LIVE_SEARCH:
			// Only return 5 at a time
			return action.payload.data.results.splice(0, 5);
	}

	return state;
}