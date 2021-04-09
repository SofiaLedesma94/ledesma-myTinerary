import Itineraries from "../../component/Itineraries"

const initialState={
    itineraries:[],
    Comments:[]
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
                    itineraries: state.itineraries.map(comment=>comment._id === action.payload._id ? action.payload : comment)
                }
                break 
                case "VALORATION":
                return{
                    ...state,
                    Comments:action.payload
                }
                
               
    default:
        return state
    }
   
}

export default itineraryReducer