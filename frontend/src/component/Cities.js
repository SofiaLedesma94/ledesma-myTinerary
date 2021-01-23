import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'


const Cities =()=>{
    const [ciudades, setCiudades]=useState([])
    
     useEffect(()=>{
       fetch('http://localhost:4000/api/cities')
        .then(respuesta => respuesta.json())
        .then(data =>  setCiudades(data.respuesta))
        
    },[])

   

   

    return (
        
       <div className='city' key="keyCity">
            <div key="title" className="title"><h1>Cities</h1></div>
                <input type='text' name='buscador' 
                placeholder="find your itinerary" ></input>
            { ciudades.map(ciudad=>{
            return(
                <>
                <Link to={`/itineraries/${ciudad._id}`}>
                   <div className='cities' key="cardCity" >
                     <div className='cityImg' style={{ backgroundImage:`url(${ciudad.url})`}}><p>
                      {ciudad.ciudad}</p> </div>
                   </div>
                </Link>
                </>
            )
        })  }

       </div>       
    )
}

export default Cities