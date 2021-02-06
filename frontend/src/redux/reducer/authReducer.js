const initialState ={
    loggerUser: null
}
const authReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "NEW_USER":
            return {
                    ...state,
                    loggerUser: action.payload.response 
                  }
                  break
        case "LOGOUT_USER": 
        return{
            ...state,
            loggerUser:null
        }
        break
        case "LOGIN_USER":
            return{
                ...state,
                loggerUser: action.payload.respuesta
            }
        default:
            return state
    }

}

export default authReducer


