import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCountries } from '../reducers';
import SingleCountry from './SingleCountry';
import AddCountryForm from './AddCountryForm'
import axios from 'axios'

class AllCountries extends React.Component {

  constructor() {
    super();
    this.state = {
      key: ''
    }

  }

  handleClick(event) {
    console.log("A click has been registered")
    if (event.target.id === 'edit-button') {
      // figure out what the second parameter for axios.put should be
      axios.put(`/api/countries/${event.target.value}`)
    } else if (event.target.id === 'delete-button') {
      axios.delete(`/api/countries/${event.target.value}`)
    }
  }

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
                <button id="delete-button" type="submit" value={country.id} onClick={this.handleClick}>X</button>
                <button id="edit-button" type="submit" value={country.id}>Edit</button>
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
  //should i dispatch the form state to redux too? I probably can do that. I'll mess up the entire project without knowing how to implement the if statement from dispatch and I am unable to console.log what is happening in mapDispatchHere. Read up more on React Redux forms and look over To-Do list workshop.
  fetchCountries: () => {
    const thunk = fetchCountries()
    dispatch(thunk)
  }
})

export default connect(mapStateHere, mapDispatchHere)(AllCountries);
