import {Link, Redirect} from 'react-router-dom'
import {connect} from "react-redux"
import authAction from '../redux/actions/authAction'
const Header =(props)=>{
  if(props.loggerUser){
    //links que puede ver el usuario logueado 
    var  links= <>
    <Link to="/cities">
        <button>Cities</button>
    </Link>
    <button className="nav" onClick={()=>props.logoutUser()}>Logout</button>
    <Redirect to="/"/>
    
    </>
    
  }else{
    var links=
    <>
        <Link to="/signup">
        <button>SignUp</button>
        </Link>
        <Link to="/signin">
        <button>SignIn</button>
        </Link>
    </>
  }
  return(
    <div className='header'>
      <img src="./assets/login4.png" style={{width:'6vw'}}></img>
      <div className='nav'>
        <Link to="/">
        <button>Home</button>
        </Link>
        {links}
      </div>
    </div>
  )
}
const mapStateToProps = state =>{
 return{
  loggerUser : state.auth.loggerUser
 }
}
const mapDispatchToprops ={
  logoutUser: authAction.logoutUser
}
export default connect(mapStateToProps, mapDispatchToprops) (Header)