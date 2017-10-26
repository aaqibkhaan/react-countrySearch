import { combineReducers } from 'redux';
import CountriesReducer from './reducer_countries'

const rootReducer = combineReducers({
	countries: CountriesReducer
});

export default rootReducer;