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
      <div key="keyPorId">
      <h1>{itinerarie.ciudad}</h1>
      </div>
      </>
    )
}
export default Itineraries