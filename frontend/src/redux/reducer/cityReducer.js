const initialState ={
    cities:[],
    buscador:[]
}

const cityReducer =(state=initialState, action)=>{
    switch (action.type){
        case "ALL_CITIES":
        return {
            ...state,
            cities:  action.payload
        }
        break
        case "FILTER":
            return{
                ...state,
                buscador: state.cities.filter(city =>city.ciudad.toLowerCase().indexOf(action.payload,0) === 0)

            }
      default:
      return state
    }
}

export default cityReducer

