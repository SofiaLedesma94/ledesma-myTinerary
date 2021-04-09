

import { useState } from 'react'
import { connect } from 'react-redux'
import itineraryAction from '../redux/actions/itineraryAction'
import BotonVerMas from './BotonVerMas'
import Likes from './Likes'




const ItinerariesPorCiudad =(props)=>{ 
  
  const [newValor,setNewValor]=useState(false)

  const [likes, setLikes]=useState([])
 

  const valoration = async (iditinerario)=>{
    var like=0
    console.log(iditinerario)
    setNewValor(true)
    if(newValor===true){
      setNewValor(false)
    }else{
      like++
    }
    const respuesta = await props.valorattion(iditinerario,like)
    if(respuesta && respuesta.succcess){
      setLikes(respuesta.response)
    }
  }

  




   return (
        <div className='itinerary' key="keyCity">
             { props.itineraries.map(item=>{
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
                     
                     <h6 onClick={()=>valoration(item._id)}>Likes:<Likes likes={item.like} newLike={props.Comments}/></h6>
                     <h6>Hours: {item.hours}</h6>
                     <h6>Price: {Array(item.price).fill('$')}</h6>
                  </div> 
                  <h6 className="hashtag">{item.hashtag}</h6>
                </div>
              </div>
               <BotonVerMas  actividades={item.activities} id={item._id}/>
              </div>
              </> 
            })}
        </div>
    )
}
const mapStateToProps = state =>{
    return {
      itineraries: state.itinerary.itineraries,
      loggerUser: state.auth.loggerUser,
      Comments: state.itinerary.Comments 
    }
  }
  
 const mapDispatchToProps ={
   valorattion : itineraryAction.valorattion
 }

export default connect(mapStateToProps, mapDispatchToProps) (ItinerariesPorCiudad)