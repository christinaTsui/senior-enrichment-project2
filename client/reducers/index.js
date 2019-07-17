/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'

//action types
const GETTING_AIRCRAFTS = 'GETTING_AIRCRAFTS';
const GETTING_COUNTRIES = 'GETTING_COUNTRIES';
const GOT_AIRCRAFTS = 'GOT_AIRCRAFTS';
const GOT_COUNTRIES = 'GOT_COUNTRIES';

//action creators
const gettingAircrafts = () => ({
  type: GETTING_AIRCRAFTS
})

//thunk creator


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
    default: return state
  }
};

export default rootReducer
