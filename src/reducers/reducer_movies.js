import { FETCH_FIRST_MOVIE } from '../actions/index';

export default function(state=[], action){
	switch(action.type) {
		case: FETCH_FIRST_MOVIE:
			return [ action.payload.data, ...state ];
	}

	return state;
}