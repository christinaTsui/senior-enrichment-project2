/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import axios from 'axios'
//action types
const GETTING_AIRCRAFTS = 'GETTING_AIRCRAFTS';
const GETTING_COUNTRIES = 'GETTING_COUNTRIES';
const GOT_AIRCRAFTS = 'GOT_AIRCRAFTS';
const GOT_COUNTRIES = 'GOT_COUNTRIES';
const GETTING_AIRCRAFT = 'GETTING_AIRCRAFT'
const GOT_AIRCRAFT = 'GOT_AIRCRAFT'

//action creators
const gettingAircrafts = () => ({
  type: GETTING_AIRCRAFTS
})
const gotAircrafts = (data) => ({
  type: GOT_AIRCRAFTS, data
})
const gettingAircraft = () => ({
  type: GOT_AIRCRAFT
})
const gotAircraft = (data) => ({
  type: GOT_AIRCRAFT, data
})

//thunk creator
export const fetchAircrafts = () => {
  return async (dispatch) => {
    dispatch(gettingAircrafts())
    const { data } = await axios.get('/api/aircrafts')
    dispatch(gotAircrafts(data))
  }
}

export const fetchAircraft = () => {
  return async (dispatch) => {
    dispatch(gettingAircraft())
    const { data } = await axios.get('/api/aircrafts/1')
    dispatch(gotAircraft(data))
  }
}

//reducers
const initialState = {
  loading: false,
  aircrafts: [],
  countries: [],
  singleAircraft: {},
  singleCountry: {},
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case GETTING_AIRCRAFTS:
      return {...state, loading: true};
    case GOT_AIRCRAFTS:
      return {...state, loading: false, aircrafts: action.data}
    case GETTING_AIRCRAFT:
      return {...state, loading: true}
    case GOT_AIRCRAFT:
      return {...state, loading: false, aircraft: action.data}
    default: return state
  }
};

export default rootReducer
