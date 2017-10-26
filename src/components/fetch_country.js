import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from '../actions';


class FetchCountries extends Component {


	render(){

		return (
			<div> FetchCountries Component</div>);
	}
}


export default connect(null, { fetchCountries })(FetchCountries);