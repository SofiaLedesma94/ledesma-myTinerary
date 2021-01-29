import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import cityAction from '../redux/actions/cityAction'
import Filtro from './Filtro'
import {Link} from 'react-router-dom'



const Cities =(props)=>{
    
     useEffect(()=>{
         props.listarCiudades()
     },[])

     const [busqueda, setBusqueda]=useState([])

    const BuscarCity=e=>{
        setBusqueda(
            e.target.value.toLowerCase().trim()
        )
        
    }
   

    return (
      

<div className='city' key="keyCity">
            <div key="title" className="title"><h1>Cities</h1></div>
            <Filtro  buscar={BuscarCity}/>
            { props.cities.map(city=>{
               if(city.ciudad.toLowerCase().indexOf(busqueda,0) === 0) 
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
      cities: state.city.cities
    }
  }
  
  const mapDispatchToProps ={
    listarCiudades: cityAction.listarCiudades
  }

export default connect (mapStateToProps, mapDispatchToProps)(Cities)