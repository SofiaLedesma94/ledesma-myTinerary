import './styles.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Inicio from './components/home/Inicio'
import Cities  from './components/cities/Cities'
import Itineraries from './components/itineraries/Itineraries'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import signup from './components/auth/Signup'
import signin  from './components/auth/Signin'
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
