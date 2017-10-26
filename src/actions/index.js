import axios from 'axios';


export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';


const ROOT_URL= 'https://raw.githubusercontent.com/mledoze/countries/master/countries.json';



export function fetchCountries() {
	const url = `${ROOT_URL}`;
const request = axios.get(url);

	return {
		type: FETCH_COUNTRIES,
		payload: request
	};

}