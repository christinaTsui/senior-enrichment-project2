import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAircrafts } from '../reducers';
import SingleAircraft from './SingleAircraft'
import AddAircraftForm from './AddAircraftForm'

class AllAircrafts extends React.Component {

  componentDidMount() {
    console.log("Component is Mounting")
    this.props.fetchAircrafts();
  }

  render() {
    console.log("This is the props for all aircrafts",this.props)
    const {loading, aircrafts} = this.props;
    if (loading) return <div>Loading...</div>
    return (
      <div>

        <AddAircraftForm />
        <h2 id="all-aircrafts-h2">{aircrafts.length} Aircrafts Available</h2>
        <p id="all-aircrafts-p">Browse and Add planes to your heart's content.</p>
        <img src="https://images.unsplash.com/photo-1484666086787-6cd0ccd39860?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"/>

        <h3>Listed Aircrafts</h3>
        
        <ul>
          {aircrafts.map(aircraft => {
            return (
              <li key={aircraft.id}>
                <Link to={`/Aircrafts/${aircraft.id}`} className="all-aircrafts-link">{aircraft.make}</Link>
                <Switch>
                  <Route exact path={`/Aircrafts/${aircraft.id}`} component={SingleAircraft}/>
                </Switch>
                <button id="delete-button" type="submit" >X</button>
                <button id="edit-button" type="submit" >Edit</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}


const mapState = (state) => ({
  loading: state.loading,
  aircrafts: state.aircrafts,
})

const mapDispatch = (dispatch) => ({
  fetchAircrafts: () => {
    const thunk = fetchAircrafts()
    dispatch(thunk)
  }
})

export default connect(mapState, mapDispatch)(AllAircrafts);

