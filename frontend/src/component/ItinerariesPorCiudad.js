import { connect } from 'react-redux'
import itineraryAction from '../redux/actions/itineraryAction'



const ItinerariesPorCiudad =(props)=>{
  console.log(props.itineraries)
  
    return (
        <div className='itinerary' key="keyCity">
            {props.itineraries.map(item=>{
              return <>
              <div className="contenedorItinerario">
              <div className="itinerario">
                <div className="itinerarieUsuario">
                <img src={item.userPic}></img>
                <h6>{item.userName}</h6>
                </div>
                <div className="itinerarioInfo">
                <h1>{item.title}</h1>
                  <div className="itinerarioFlex">
                     <h6>{item.like}</h6>
                     <h6>{item.hours}</h6>
                     <h6>{Array(item.price).fill('$')}</h6>
                  </div> 
                     <h6>{item.hashtag}</h6>
                </div>
              </div>
              <button>view more</button>
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