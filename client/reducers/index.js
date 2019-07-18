/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'
import axios from 'axios'
//action types
const GETTING_AIRCRAFTS = 'GETTING_AIRCRAFTS';
const GOT_AIRCRAFTS = 'GOT_AIRCRAFTS';
const GETTING_COUNTRIES = 'GETTING_COUNTRIES';
const GOT_COUNTRIES = 'GOT_COUNTRIES';

const GETTING_AIRCRAFT = 'GETTING_AIRCRAFT';
const GOT_AIRCRAFT = 'GOT_AIRCRAFT';
const GETTING_COUNTRY = 'GETTING_COUNTRY';
const GOT_COUNTRY = "GOT_COUNTRY"

//action creators
const gettingAircrafts = () => ({
  type: GETTING_AIRCRAFTS
})
const gotAircrafts = (data) => ({
  type: GOT_AIRCRAFTS, data
})
const gettingCountries = () => ({
  type: GETTING_COUNTRIES
})
const gotCountries = (data) => ({
  type: GOT_COUNTRIES, data
})
const gettingAircraft = () => ({
  type: GETTING_AIRCRAFT
})
const gotAircraft = (data) => ({
  type: GOT_AIRCRAFT, data
})
const gettingCountry = () => ({
  type: GETTING_COUNTRY,
})
const gotCountry = (data) => ({
  type: GOT_COUNTRY, data
})

//thunk creator
export const fetchAircrafts = () => {
  return async (dispatch) => {
    dispatch(gettingAircrafts())
    const { data } = await axios.get('/api/aircrafts')
    dispatch(gotAircrafts(data))
  }
}

//change these axios calls from a hard code!!
export const fetchAircraft = () => {
  return async (dispatch) => {
    dispatch(gettingAircraft())
    const { data } = await axios.get('/api/aircrafts/1')
    dispatch(gotAircraft(data))
  }
}

//check axios request because nothing is coming back populated in the second render
//checked axios, it is updating the second reder with the correct information. But the react component here is not able to use it in the render when I map it through the array.
export const fetchCountries = () => {
  return async (dispatch) => {
    dispatch(gettingCountries())
    const { data } = await axios.get('/api/countries')
    dispatch(gotCountries(data))
  }
}

export const fetchCountry = () => {
  return async (dispatch) => {
    dispatch(gettingCountry())
    const { data } = await axios.get('/api/country/1')
    dispatch(gotCountry(data))
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
    case GETTING_COUNTRIES:
      return {...state, loading: true}
    case GOT_COUNTRIES:
      return {...state, loading: false, countries: action.data}
    case GETTING_AIRCRAFT:
      return {...state, loading: true}
    case GOT_AIRCRAFT:
      return {...state, loading: false, aircraft: action.data}
    case GETTING_COUNTRY:
      return {...state, loading: true}
    case GOT_COUNTRY:
      return {...state, loading: false, country: action.data}
    default: return state
  }
};

export default rootReducer
