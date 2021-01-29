import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const Itineraries=(props)=>{
    const [city, setCity]=useState({})
    
    useEffect(()=>{
      const {id}= props.match.params
      const lugar=props.cities.filter(lugar=>lugar._id === id)
      setCity(lugar[0])
   },[])
   
    return (
      <>
       <div className="Itineraries" key="keyPorId">
        <div className="itinerariesId"style={{backgroundImage:`url(${city.url})`,
        backgroundRepeat:'no-repeat',backgroundSize:'cover', width:'60vw', margin:'auto'}}>
          <p>{city.ciudad}</p>

        </div>
        <h3>Available MyTineraries:</h3>
        <h2>No Itineraries yet!</h2>
      </div>
      </>
    )
}
const mapStateToProps = state =>{
  return {
    cities: state.city.cities
  }
}


export default connect(mapStateToProps) (Itineraries)