
import { connect } from 'react-redux'
import itineraryAction from '../redux/actions/itineraryAction'
import BotonVerMas from './BotonVerMas'



const ItinerariesPorCiudad =(props)=>{  
    return (
        <div className='itinerary' key="keyCity">
            {props.itineraries.map(item=>{
              return <>
              <div className="contenedorItinerario" key="keyItinerary">
              <div className="itinerario" key="itineraryCont">
                <div className="itinerarieUsuario" key="itineraryUser">
                <img src={item.userPic}></img>
                <h6>{item.userName}</h6>
                </div>
                <div className="itinerarioInfo" key="itineraryInfo">
                <h1>{item.title}</h1>
                  <div className="itinerarioFlex" key="itineraryFlex">
                     <h6>Likes: {item.like}</h6>
                     <h6>Hours: {item.hours}</h6>
                     <h6>Price: {Array(item.price).fill('$')}</h6>
                  </div> 
                  <h6 className="hashtag">{item.hashtag}</h6>
                </div>
              </div>
               <BotonVerMas  actividades={item.activities}/>
              </div>
              </> 
            })}
        </div>
    )
}
const mapStateToProps = state =>{
    return {
      itineraries: state.itinerary.itineraries
    }
  }
  
  
  const mapDispatchToProps ={
    listaItinerarioPorCiudad: itineraryAction.listaItinerarioPorCiudad
  }

export default connect(mapStateToProps, mapDispatchToProps) (ItinerariesPorCiudad)