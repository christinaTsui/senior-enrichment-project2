import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAircraft } from '../reducers';

class SingleCountry extends React.Component {
  componentDidMount() {
    this.props.fetchAircraft();
  }

  render() {
    const { loading, aircraft } = this.props
    if (loading) return <div>Loading...</div>;
    return (
      <div key={aircraft.id}>
        <div>Single Aircraft</div>
        <img src={aircraft.imageUrl}/>
        <h2>Make: {aircraft.make} </h2>
        <h2>Model: {aircraft.model} </h2>
        <h2>Country: {aircraft.country} </h2>
        <h2>About The {`${aircraft.make}`} : {aircraft.description} </h2>
      </div>
    );
  }
}

const mapState = (state) => ({
  loading: state.loading,
  aircraft: state.aircraft
})

const mapDispatch = (dispatch) => ({
  fetchAircraft: () => {
    const thunk = fetchAircraft()
    dispatch(thunk)
  }
})

export default connect(mapState, mapDispatch)(SingleCountry);
