import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchAircrafts } from '../reducers';

class AllAircrafts extends React.Component {
  // if (loading) return <div>Loading...</div>

  render() {
    // console.log('this.props', props)
    return (
      <div>All Aircrafts</div>
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
