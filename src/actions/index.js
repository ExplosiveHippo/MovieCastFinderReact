import axios from 'axios';

const ROOT_URL = 'https://api.themoviedb.org/3';
const API_KEY = '6f1f9a1abf347d1f0a727e5e486bba47';

export const FETCH_FIRST_MOVIE = 'FETCH_FIRST_MOVIE';
export const SELECT_FIRST_MOVIE = 'SELECT_FIRST_MOVIE';

export function fetchFirstMovie(movie) {
	console.log("movie: ", movie);
	const url = `${ROOT_URL}/search/movie?api_key=${API_KEY}&query=${movie}`;

	const request = axios.get(url);

	console.log("Request: ", request);

	return {
		type: FETCH_FIRST_MOVIE,
		payload: request
	}

}

export function selectFirstMovie(movie) {
	console.log("selectedDaMovie: ", movie);

	return {
		type: SELECT_FIRST_MOVIE,
		payload: movie
	}

}