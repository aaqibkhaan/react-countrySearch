import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from '../actions';


class FetchCountries extends Component {
	componentDidMount(){
		this.props.fetchCountries();
	}

	renderCountries() {

		const { countries } = this.props;
		

		return _.map(countries , country =>{

			return (
			<tr key={country.name.official}>
				<td> {country.name.official} </td>
				<td> {country.capital} </td>
				<td> {country.region} </td>
				<td> {country.subregion} </td>
			</tr>
				);

		});

	}

	render() {

		return(

			<table className="table table-hover">
				<thead className="thead-dark">
					<tr>
					<th scope="col">Countries</th>
					<th scope="col">Capital</th>
					<th scope="col">Region</th>
					<th scope="col">SubRegion</th>
					</tr>
				</thead>
				<tbody>
				{this.renderCountries()}
				</tbody>
			</table>
			);

	}
}

function mapStateToProps (state) {
	return { countries: state.countries };
}


export default connect (mapStateToProps, { fetchCountries })(FetchCountries);