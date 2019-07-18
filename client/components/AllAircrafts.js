import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAircrafts } from '../reducers';
import SingleAircraft from './SingleAircraft'

class AllAircrafts extends React.Component {

  componentDidMount() {
    this.props.fetchAircrafts();
  }

  render() {
    // console.log(this.props)
    const {loading, aircrafts} = this.props;
    if (loading) return <div>Loading...</div>
    return (
      <div>
        <h2>All Supported Aircrafts</h2>
        <ul>
          {aircrafts.map(aircraft => {
            return (
              <li key={aircraft.id}>
                <Link to={`/Aircrafts/${aircraft.id}`} className="all-aircrafts-link">{aircraft.model}</Link>
                <Switch>
                  <Route exact path={`/Aircrafts/${aircraft.id}`} component={SingleAircraft}/>
                </Switch>
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


//individual aircrafts and such
// {aircrafts.map(aircraft => {
//   return (
//     <div key={aircraft.id}>
//       <img src={aircraft.imageUrl}/>
//       <h2> {aircraft.name} </h2>
//     </div>
//   )
// })}
