const initialState ={
    loggerUser: null
}
const authReducer = (state=initialState, action)=>{
    switch (action.type) {
        case "CREATE_LOG_USER":
            localStorage.setItem('userPic', action.payload.response.userPic)
            localStorage.setItem('token', action.payload.response.token)
            return {
                    ...state,
                    loggerUser: action.payload.response 
                  }
                  break
        case "LOGOUT_USER": 
        localStorage.clear()
        return{
            ...state,
            loggerUser:null
        }
        default:
            return state
    }

}

export default authReducer


