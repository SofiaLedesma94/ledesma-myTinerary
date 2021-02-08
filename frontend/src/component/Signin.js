import { useState } from "react"
import authAction from "../redux/actions/authAction"
import {connect} from "react-redux"
import swal from 'sweetalert'

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
           swal('welcome to mytineray')
       }
   }

    return (
        <>
        <div className="ContendorInputSeparador"></div>
        <form action="#" target="" method="get" name="formDatosPersonales">    
            <h1>log in to your account</h1>
           <div className="contenedorInput">
             <label >User Name</label>
             <input type="email" name="userName" placeholder="write your email" onChange={validarInput}/>
           </div> 
           <div className="contenedorInput">
              <label >Password</label>
              <input type="password" name="password"  placeholder="Enter your password" onChange={validarInput}/>
           </div>
           <div className="contenedorInput">
             <button onClick={validarCuenta}>Log In</button>
           </div>
           <div className="contenedorInput">
             {error.map(item=><h6 className="errores">{item}</h6>)}
           </div>
        </form>
        <div className="ContendorInputSeparador"></div>
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