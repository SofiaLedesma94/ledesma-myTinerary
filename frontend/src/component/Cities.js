import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import Filtro from './Filtro'



const Cities =()=>{
    const [ciudades, setCiudades]=useState([])
    
     useEffect(()=>{
       fetch('http://localhost:4000/api/cities')
        .then(respuesta => respuesta.json())
        .then(data =>  setCiudades(data.respuesta))
        
    },[])
    const [busqueda, setBusqueda]=useState([])

    const BuscarCity=e=>{
        setBusqueda(
            e.target.value
        )
        console.log(busqueda)
    }


    return (
        
       <div className='city' key="keyCity">
            <div key="title" className="title"><h1>Cities</h1></div>
            <Filtro  buscar={BuscarCity}/>
            { ciudades.map(({_id,url,ciudad})=>{
               if(ciudad.toLowerCase().indexOf(busqueda, 0) === 0) 
            return(
                <>
                <Link to={`/itineraries/${_id}`}>
                   <div className='cities' key="cardCity" >
                     <div className='cityImg' style={{ backgroundImage:`url(${url})`}}><p>
                      {ciudad}</p> </div>
                   </div>
                </Link>
                </>
                
            )
        })  }

       </div>       
    )
}

export default Cities