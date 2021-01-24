import React, { useEffect, useState } from 'react'
const Itineraries=(props)=>{
    const [itinerarie,setItinerarie]=useState({})
    const id= props.match.params.id
    useEffect(()=>{
      fetch('http://localhost:4000/api/itineraries/'+id)
       .then(respuesta => respuesta.json())
       .then(data => setItinerarie(data.respuesta))
   },[])
   
    return (
      <>
      <div className="Itineraries" key="keyPorId">
        <h3>Available MyTineraries:</h3>
        <h2>No Itineraries yet!</h2>
      </div>
      </>
    )
}
export default Itineraries