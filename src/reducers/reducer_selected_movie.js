import { FETCH_ACTORS } from '../actions/index';

export default function(state=[], action){
	console.log('action: ', action);

	switch(action.type) {
		case FETCH_ACTORS:
			return action.payload;
	}

	return state;
}