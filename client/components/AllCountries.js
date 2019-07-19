import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCountries } from '../reducers';
import SingleCountry from './SingleCountry';
import AddCountryForm from './AddCountryForm'

class AllCountries extends React.Component {

  componentDidMount() {
    console.log("Component is Mounting")
    this.props.fetchCountries();
  }

  render() {
    console.log("this is the props for all countries", this.props)
    const {loading, countries} = this.props;
    if (loading) return <div>Loading...</div>
    return (
      <div>
        <AddCountryForm/>
        <h2 id="all-countries-h2">{countries.length} Countries with Aircrafts</h2>
        <p id="all-countries-p">Browse and add countries that build beautiful and powerful planes to our growing list at Planesaurus.</p>
        <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1333&q=80"/>
        <ul>
          {countries.map(country => {
            return (
              <li key={country.id}>
                <Link to={`/Countries/${country.id}`} className="all-aircrafts-link">{country.name}</Link>
                <Switch>
                  <Route exact path={`/Countries/${country.id}`} component={SingleCountry}/>
                </Switch>
                <button id="delete-button" type="submit" >X</button>
                <button id="edit-button" type="submit" >Edit</button>
              </li>
            )})}
        </ul>
      </div>
    )
  }
}

// Redux => React
const mapStateHere = (state) => ({
  loading: state.loading,
  countries: state.countries,
})

// React => Redux
const mapDispatchHere = (dispatch) => ({
  fetchCountries: () => {
    const thunk = fetchCountries()
    dispatch(thunk)
  }
})

export default connect(mapStateHere, mapDispatchHere)(AllCountries);
