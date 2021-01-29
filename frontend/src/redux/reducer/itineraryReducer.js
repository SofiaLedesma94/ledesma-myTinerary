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
    default:
        return state
    }
}

export default itineraryReducer