import axios from 'axios'

const getAuthError = (error) => {
    if (error.response && error.response.data) {
        return error.response.data
    }
    return { success: false, message: 'Request failed', errors: [] }
}

const authAction = {
    newUser:   (usuario)=>{
        return async (dispatch, getState)=>{
            try {
            const respuesta =  await axios.post('http://localhost:4000/api/user/signup',usuario)
            if(!respuesta.data.success){
               return respuesta.data
            }
          
            dispatch({type:"CREATE_LOG_USER", payload: respuesta.data })
            } catch (error) {
                return getAuthError(error)
            }
        }
    },
    logoutUser: ()=>{
       return (dispatch, getState)=>{
         //limpia el estado de redux 
         dispatch({type:"LOGOUT_USER"})
       }
    },
    logFromLocalStorage: (token)=>{
        return async (dispatch, getState)=>{
           try {
            const respuesta = await axios.post('http://localhost:4000/api/ls', {token},{
                headers: {
                    authorization: `Bearer ${token}` 
                }
            })
            console.log(respuesta.data)
           dispatch ({type: "CREATE_LOG_USER", payload:{response:{...respuesta.data.response}}})
           } catch (error) {
            if(error.response){
                alert('invalid')
                localStorage.clear()
                return '/'
            }
              
           }
        }
    },
    userLogin:(user)=>{
        return async (dispatch, getState)=>{
            try {
            const respuesta =  await axios.post('http://localhost:4000/api/user/signin',user)
            if(!respuesta.data.success){
               return respuesta.data
            }
            dispatch({type:"CREATE_LOG_USER", payload: respuesta.data })
            } catch (error) {
                return getAuthError(error)
            }
        }
    }

}

export default authAction