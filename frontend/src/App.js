import './styles.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Inicio from './component/Inicio'
import Cities  from './component/Cities'
import Itineraries from './component/Itineraries'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
       <Switch>
       <Route exact path="/" component={Inicio}/>
       <Route  path="/cities" component={Cities} />
       <Route path="/itineraries/:id" component={Itineraries}/>
       </Switch>
      </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
