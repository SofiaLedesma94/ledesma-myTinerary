import {combineReducers} from 'redux'
 import cityReducer from './cityReducer'
 import itineraryReducer from './itineraryReducer'

const rootReducer = combineReducers({
    city: cityReducer,
    itinerary:itineraryReducer
})

export default rootReducer