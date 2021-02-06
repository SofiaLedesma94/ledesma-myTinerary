import { useState } from "react"
import authAction from "../redux/actions/authAction"
import {connect} from "react-redux"

const Singup =(props)=>{
   const [usuario, setUsuario]=useState({})
   const [errores, setErrores]=useState([])
   const validarInput=e=>{
       const valor= e.target.value
       const campo= e.target.name
       setUsuario({
           ...usuario,
           [campo]:valor
       })
   }


   const validarCuenta= async e=>{
       //cuando haga click en validar debemos validar los campos 
       e.preventDefault()
       console.log(usuario)
       if(usuario.userName === ''|| usuario.userPic === '' || usuario.password === ''|| usuario.uName === '' || usuario.lastName === ' ' ){
           alert('completar los campos')
           return false 
           
       }
       setErrores([])
       const respuesta = await props.newUser(usuario)
       if(respuesta && !respuesta.success){
         setErrores(
            respuesta.respuesta
         )
       }
   }

    return (
        <>
        <h1>Creat Sccount</h1>
        <form action="#" target="" method="get" name="formDatosPersonales">     
       <label >User Name</label>
       <input type="email" name="userName" placeholder="write your email" onChange={validarInput}/>
       <label >Password</label>
       <input type="password" name="password"  placeholder="Enter your password" onChange={validarInput}/>
       <label>User Image</label>
       <input type="text" name="userPic" placeholder="insert image" onChange={validarInput}/>
       <label for="name">Name</label>
       <input type="text" name="uName"  placeholder="write your name" onChange={validarInput}/>
       <label>Last Name</label>
      <input type ="text" name="lastName" placeholder="write your last name" onChange={validarInput}/>
      <button onClick={validarCuenta}>Create Account</button>
      {errores.map(item=><h6>{item}</h6>)}
     </form>
        </>
    )
}

const mapDispatchToProps ={
    newUser: authAction.newUser
}

export default connect (null, mapDispatchToProps) (Singup)