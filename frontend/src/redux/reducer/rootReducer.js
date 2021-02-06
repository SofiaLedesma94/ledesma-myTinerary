import {combineReducers} from 'redux'
 import cityReducer from './cityReducer'
 import itineraryReducer from './itineraryReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    city: cityReducer,
    itinerary:itineraryReducer,
    auth:authReducer
})

export default rootReducer