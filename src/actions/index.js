import axios from 'axios';

export const FETCH_FIRST_MOVIE = 'fetch_first_movie';

const ROOT_URL = 'https://api.themoviedb.org/3';
const API_KEY = '6f1f9a1abf347d1f0a727e5e486bba47';

export function fetchFirstMovie(movie) {
	console.log("movie: ", movie);

	const request = axios.get(`${ROOT_URL}/search/movie?api_key=${API_KEY}&query=${movie}`);

	console.log(request);

	return {
		type: FETCH_FIRST_MOVIE,
		payload: request
	}

}