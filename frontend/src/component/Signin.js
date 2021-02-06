import { useState } from "react"
import authAction from "../redux/actions/authAction"
import {connect} from "react-redux"

const Singin =(props)=>{
   const [usuarioLogueado, setUsuarioLoguead]=useState({})
  const [error, setError]=useState([])
   const validarInput=e=>{
       const valor= e.target.value
       const campo= e.target.name
       setUsuarioLoguead({
           ...usuarioLogueado,
           [campo]:valor
       })
   }
   


   const validarCuenta= async e=>{
       //cuando haga click en validar debemos validar los campos 
       e.preventDefault()
       console.log(usuarioLogueado)
       if(usuarioLogueado.userName === '' || usuarioLogueado.password === ''){
           alert('completar los campos')
           return false 
       }
       const respuesta = await props.userLogin(usuarioLogueado)
       if(respuesta && !respuesta.success){
        setError([respuesta.respuesta])
       }else{
           alert('welcome')
       }
   }

    return (
        <>
        <h1>Log In</h1>
        <form action="#" target="" method="get" name="formDatosPersonales">     
       <label >User Name</label>
    <input type="email" name="userName" placeholder="write your email" onChange={validarInput}/>
       <label >Password</label>
       <input type="password" name="password"  placeholder="Enter your password" onChange={validarInput}/>
      <button onClick={validarCuenta}>Loguear</button>
     {error.map(item=><h6>{item}</h6>)}
     </form>
        </>
    )
}
const mapStateToprops = state =>{
    return {
        loggerUser: state.auth.loggerUser
    }
}
const mapDispatchToProps ={
    userLogin: authAction.userLogin
}

export default connect (mapStateToprops, mapDispatchToProps) (Singin)