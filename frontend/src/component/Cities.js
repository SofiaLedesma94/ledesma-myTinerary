import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import cityAction from '../redux/actions/cityAction'
import Filtro from './Filtro'
import {Link} from 'react-router-dom'
import CiudadFiltrada from './CiudadFiltrada'



const Cities =(props)=>{
  const [busqueda, setBusqueda]=useState([])
 

  const BuscarCity=e=>{
      setBusqueda(
          e.target.value.toLowerCase().trim()
      )
  }
 
    
     useEffect(()=>{
         props.listarCiudades()
         props.filtroCiudad(busqueda)
     },[busqueda])

  
  
  
   if(busqueda.length >0) return(
    <div className='city' key="keyCity">
    <div key="title" className="title"><h1>Cities</h1></div>
    <Filtro  buscar={BuscarCity}/>
   <CiudadFiltrada/>
   </div>
    ) 
   return (
      <div className='city' key="keyCity">
       <div key="title" className="title"><h1>Cities</h1></div>
       <Filtro  buscar={BuscarCity}/>
       {props.cities.map(city=>{
            return(
                <>
                   <div className='cities' key="cardCity" >
                   <Link to={`/itineraries/${city._id}`}>
                     <div className='cityImg' style={{ backgroundImage:`url(${city.url})`}}><p>
                      {city.ciudad}</p> </div>
                      </Link>
                   </div>
                </>
            )
        })  }
         </div>
        )
  
   
}
  


const mapStateToProps = state =>{
  return {
    cities: state.city.cities,
    buscador: state.city.buscador
  }
}


const mapDispatchToProps ={
  listarCiudades: cityAction.listarCiudades,
  filtroCiudad: cityAction.filtroCiudad

}
export default connect (mapStateToProps, mapDispatchToProps)(Cities)