import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from '../actions';


class FetchCountries extends Component {
	componentDidMount(){
		this.props.fetchCountries();
	}
/*
	renderCountries() {
		return _.map(this.props.countries , country => {
			return (
					<li className="list-group-item">
							{country.capital}
					</li>
				);

		});


	}*/

	render() {
		console.log(this.props.countries);

		return(

			<div>
				<h3>Fetching Countries Data</h3>
				<ul className="list-group">
				</ul>
			</div>
			);

	}
}

function mapStateToProps (state) {
	return { countries: state.countries };
}


export default connect (mapStateToProps, { fetchCountries })(FetchCountries);