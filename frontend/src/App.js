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


function App(props) {
  if(props.loggerUser){
     var links =<>
     <Switch>
     <Route  path="/cities" component={Cities} />
       <Route path="/itineraries/:id" component={Itineraries}/>
       <Redirect to="/"/>
     </Switch>
     </>
  }else {
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
    <div className="app">
      <BrowserRouter>
      <Header/>
       <Route exact path="/" component={Inicio}/>
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

export default connect (mapStateToProps) (App);
