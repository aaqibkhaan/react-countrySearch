import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchCountries  } from '../actions';
import SearchBar from './search_bar';


class FetchCountries extends Component {
    constructor(props){
        super(props);
        this.state = { searchValue : '' };
        this.renderCountries = this.renderCountries.bind(this);
        this.handleSearchTerm = this.handleSearchTerm.bind(this);
    }

    componentDidMount(){
        this.props.fetchCountries();
    }

    renderCountries() {
        const { countries } = this.props;
        const searchValue = this.state.searchValue;
        const filteredCountries = _.filter( countries , country => {
            if (country.name.official.indexOf(searchValue) > -1 || country.capital.indexOf(searchValue) > -1 || country.region.indexOf(searchValue) > -1 || country.subregion.indexOf(searchValue) > -1 ) {
                return country;
            }

        });



        return (_.map(filteredCountries, (country) => {

            return(
                  <tr key={country.name.official}>
                        <td> {country.name.official} </td>
                        <td> {country.capital} </td>
                        <td> {country.region} </td>
                        <td> {country.subregion} </td>
                        </tr>);

        }));

    }



    handleSearchTerm(term) {
        this.setState({searchValue : term});
    }

    render() {
		
    return(
    	
            <div>
                <SearchBar onSearchTermChange= {this.handleSearchTerm}/>
                
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
            </div>
        );
    }
}

function mapStateToProps (state) {
    return { countries: state.countries };
}
export default connect (mapStateToProps, { fetchCountries })(FetchCountries);