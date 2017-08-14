import { combineReducers } from 'redux';
import MovieReducer from './reducer_movies';
import SelectedReducer from './reducer_selected_movie';

const rootReducer = combineReducers({
	movies: MovieReducer,
	firstMovie: SelectedReducer
});

export default rootReducer;
