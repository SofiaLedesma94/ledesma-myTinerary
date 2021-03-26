import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import itineraryAction from '../redux/actions/itineraryAction'
import ItinerariesPorCiudad from './ItinerariesPorCiudad'
import cityAction from '../redux/actions/cityAction'


const Itineraries=(props)=>{
    const [city, setCity]=useState({})
    
    
    useEffect(()=>{
      const {id}= props.match.params
      const lugar=props.cities.filter(lugar=>lugar._id === id)
      setCity(lugar[0])
      props.listaItinerarioPorCiudad(id)
      if(lugar.length === 0){
       return props.history.push('/')
      }
   },[])
   

    return (
      <>
       <div className="Itineraries" key="keyPorId">
        <div className="itinerariesId"style={{backgroundImage:`url(${city.url})`,
        backgroundRepeat:'no-repeat',backgroundSize:'cover', width:'80vw', margin:'auto'}}>
          <p>{city.ciudad}</p>

        </div>
        <h3>Available MyTineraries:</h3>
        {!props.itineraries ? <h2>No Itineraries yet!</h2> : <ItinerariesPorCiudad/>}
        
      </div>
      </>
    )
}
const mapStateToProps = state =>{
  return {
    cities: state.city.cities,
    itineraries: state.itinerary.itineraries,
  }
}
const mapDispatchToProps ={
  listaItinerarioPorCiudad: itineraryAction.listaItinerarioPorCiudad,
  listarCiudades: cityAction.listarCiudades
}

export default connect(mapStateToProps,mapDispatchToProps) (Itineraries)