import './styles.css'
import Header from './component/Header'
import Section from './component/Section'
import Carousel from './component/Carousel'
import Footer from './component/Footer'
import Titulo from './component/TituloCarousel'
import Flecha from './component/Flecha'
import Citys  from './component/Citys'
import {BrowserRouter, Route} from 'react-router-dom'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
       <Route  path="/" component={Header}/>
       <Route  path="/" component={Section}/>
       <Route path="/citys" component={Citys} />
       <Route exact path="/" component={Flecha} />
       <Route exact path="/" component={Titulo}/>
       <Route exact path="/" component={Carousel} />
      </BrowserRouter>
      
    <Footer/>
    </div>
  );
}

export default App;
