import { combineReducers } from 'redux';
import MovieReducer from './reducer_movies';

const rootReducer = combineReducers({
	movie: MovieReducer
});

export default rootReducer;
