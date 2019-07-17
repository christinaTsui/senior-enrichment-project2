import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAircrafts } from '../reducers';

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
        {aircrafts.map(aircraft => {
          return (
            <div key={aircraft.id}>
              <img src={aircraft.imageUrl}/>
              <h2> {aircraft.name} </h2>
            </div>
          )
        })}
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
