import axios from 'axios';

const ROOT_URL = 'https://api.themoviedb.org/3';
const API_KEY = '6f1f9a1abf347d1f0a727e5e486bba47';

export const FETCH_LIVE_SEARCH = 'FETCH_LIVE_SEARCH';
export const FETCH_ACTORS = 'FETCH_ACTORS';

export function fetchLiveSearch(movie,id) {
	console.log("movie: ", movie);
	const url = `${ROOT_URL}/search/movie?api_key=${API_KEY}&query=${movie}`;

	const request = axios.get(url);

	console.log("Request: ", request);

	return {
		type: FETCH_LIVE_SEARCH,
		payload: request
	}

}

export function fetchActors(movie1, movie2) {
	console.log("selectedDaMovie: ", movie1);
	console.log("selectedDa2Movie: ", movie2);

	return {
		type: FETCH_ACTORS,
		payload: movie1
	}

}