import { useState,useEffect } from "react"
import authAction from "../redux/actions/authAction"
import {connect} from "react-redux"
import GoogleLogin from 'react-google-login'

const Singup =(props)=>{
   const [usuario, setUsuario]=useState({})
  const [errores, setErrores]=useState([])
   const [country, setCountry]=useState([])
   const validarInput=e=>{
       const valor= e.target.value
       const campo= e.target.name
       setUsuario({
           ...usuario,
           [campo]:valor
       })
   }

    useEffect(()=>{
      fetch ('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountry(data))
    },[])

    
 


   const validarCuenta= async e=>{
       //cuando haga click en validar debemos validar los campos 
       e.preventDefault()
       if(usuario.userName === ''|| usuario.userPic === '' || usuario.password === ''|| usuario.name === '' || usuario.lastName === ' ' || country.country === '' ){
           alert('completar los campos')
           return false 
           
       }
       setErrores([])
       const respuesta = await props.newUser(usuario)
       if(respuesta && !respuesta.success){
        setErrores(respuesta.respuesta.details)
       }
   }
   const responseGoogle = async (response) => {
    if(response.error){
      alert ('invalid account')
    }else{
      //podemos crear el nuevo usuario con google con la action 
      const respuesta = await props.newUser({
        userName: response.profileObj.email,
        userPic: response.profileObj.imageUrl,
        password: response.profileObj.googleId,
        name: response.profileObj.givenName,
        lastName: response.profileObj.familyName
      })
      if(respuesta && !respuesta.success){
        setErrores(respuesta.respuesta)
       }
    }
  }

    return (
        <>
        <div className="contenedorSeparador"></div>
       <form action="#" target="" method="get" name="formDatosPersonales">
           <h1>Creat Account</h1>
           <div className="contenedorInput">
              <label >User Name</label>
              <input type="email" name="userName" placeholder="write your email" onChange={validarInput}/>
            </div>     
            <div className="contenedorInput">
              <label >Password</label>
              <input type="password" name="password"  placeholder="Enter your password" onChange={validarInput}/>
            </div>
            <div className="contenedorInput">
              <label>User Image</label>
              <input type="text" name="userPic" placeholder="insert image" onChange={validarInput}/>
            </div>
            <div className="contenedorInput">
              <label for="name">Name</label>
              <input type="text" name="name"  placeholder="write your name" onChange={validarInput}/>
            </div>
            <div className="contenedorInput">
              <label>Last Name</label>
              <input type ="text" name="lastName" placeholder="write your last name" onChange={validarInput}/>
            </div>
            <div className="contenedorInput">
              <label>Country</label>
              <select>
               {country.map(pais=><option name="country" onChange={validarInput}>{pais.name}</option>)}
              </select>
             </div>
            <div className="contenedorInput">
              <button onClick={validarCuenta}>Create Account</button>
            </div>
            <div className="contenedorInput">
            <GoogleLogin
               clientId="978528511816-3k9kd29jinveqkqkp46hf7ejn46vbrc7.apps.googleusercontent.com"
               buttonText="Crear Account with Google"
               onSuccess={responseGoogle}
               onFailure={responseGoogle}
               cookiePolicy={'single_host_origin'}
            />
            </div> 
            {errores.map(item=><h6>{item.message}</h6>)} 
            {errores.map(item=><h6>{item}</h6>)} 
        </form>
        </>
    )
}

const mapDispatchToProps ={
    newUser: authAction.newUser
}

export default connect (null, mapDispatchToProps) (Singup)