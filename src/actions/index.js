import axios from 'axios';

export const FETCH_FIRST_MOVIE = 'fetch_first_movie';

const ROOT_URL = '';
const API_KEY = '6f1f9a1abf347d1f0a727e5e486bba47';

export function fetchFirstMovie() {

	const request = axios.get();

	return {
		type: FETCH_FIRST_MOVIE,
		payload: request
	}

}