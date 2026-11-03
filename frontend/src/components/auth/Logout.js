import {connect} from "react-redux"
import authAction from '../../redux/actions/authAction'

const Logout =(props)=>{
  return (
    <button className="nav" onClick={()=>props.logoutUser()}>Logout</button>
  )
}

const mapDispatchToProps ={
  logoutUser: authAction.logoutUser
}

export default connect(null, mapDispatchToProps) (Logout)
