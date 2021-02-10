import Itineraries from "../../component/Itineraries"

const initialState={
    itineraries:[]
}

const itineraryReducer =(state=initialState,action)=>{
    switch (action.type){
        case "ALLITINERARIES":
            return{
                ...state,
                itineraries: action.payload
            }
            break
            case "COMMENTS":
                return {
                    ...state,
                    Itineraries: action.payload
                }
    default:
        return state
    }
    
}

export default itineraryReducer