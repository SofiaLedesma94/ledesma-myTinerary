import axios from 'axios'
const authAction = {
    newUser:   (usuario)=>{
        return async (dispatch, getState)=>{
            const respuesta =  await axios.post('http://localhost:4000/api/user/signup',usuario)
            if(!respuesta.data.success){
               return respuesta.data
            }
          
            dispatch({type:"NEW_USER", payload: respuesta.data })
        }
    },
    logoutUser: ()=>{
       return (dispatch, getState)=>{
         //limpia el estado de redux 
         dispatch({type:"LOGOUT_USER"})
       }
    },
    userLogin:(user)=>{
        return async (dispatch, getState)=>{
            const respuesta =  await axios.post('http://localhost:4000/api/user/signin',user)
            if(!respuesta.data.success){
               return respuesta.data
            }
            dispatch({type:"LOGIN_USER", payload: respuesta.data })
        }
    }

}

export default authAction