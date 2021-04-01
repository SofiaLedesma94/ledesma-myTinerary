import './styles.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Inicio from './component/Inicio'
import Cities  from './component/Cities'
import Itineraries from './component/Itineraries'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import signup from './component/Signup'
import signin  from './component/Signin'
import {connect} from 'react-redux'
import authAction from './redux/actions/authAction'
import {useState} from 'react'


function App(props) {
  const [userInvalid, setUserInvalid]=useState(false)
  if(props.loggerUser){
     var links =<>
     <Switch>
     <Route  path="/cities" component={Cities} />
       <Route path="/itineraries/:id" component={Itineraries}/>
       <Redirect to="/"/>
     </Switch>
     </>
  }else if(localStorage.getItem('token')){
   props.logFromLocalStorage(localStorage.getItem('token'))
   .then(respuesta =>{
     if(respuesta === '/') setUserInvalid(!userInvalid)
   })
  }
  else {
    var links = <>
    <Switch>
     <Route path="/signup" component={signup}/>
    <Route path="/signin" component={signin}/>
    <Redirect to="/"/>
    </Switch>
    </>
  }
  console.log('componente actual de loggeruser', props)
  return (
    <div className="app" key='browser'>
      <BrowserRouter key='br'>
      <Header/>
       <Route exact path="/" component={Inicio} key='inicio'/>
       {links}
      </BrowserRouter>
    <Footer/>
    </div>
  );
}
const mapStateToProps = state =>{
  return {
    loggerUser: state.auth.loggerUser
  }
}
const mapDispatchToProps ={
  logFromLocalStorage: authAction.logFromLocalStorage
}

export default connect (mapStateToProps, mapDispatchToProps) (App);
