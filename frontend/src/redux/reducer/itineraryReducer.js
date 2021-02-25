import Itineraries from "../../component/Itineraries"

const initialState={
    itineraries:[],
    comments:[]
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
                    comments: action.payload
                }
                break 
                case "ALLCOMMENTS":
                    return {
                        ...state,
                        comments: action.payload
                    }
    default:
        return state
    }
    
}

export default itineraryReducer