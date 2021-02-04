import {combineReducers} from 'redux'
 import cityReducer from './cityReducer'
 import itineraryReducer from './itineraryReducer'
 import activityReducer from './itineraryReducer'

const rootReducer = combineReducers({
    city: cityReducer,
    itinerary:itineraryReducer,
    activity: activityReducer
})

export default rootReducer