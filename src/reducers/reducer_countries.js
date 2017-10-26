import _ from 'lodash';
import { FETCH_COUNTRIES} from '../actions';

export default function(state = {} , action) {
	switch(action.type){
		
		case FETCH_COUNTRIES:
		return _.mapKeys(action.payload.data, 'capital');


		default:
		return state;
	}
}

