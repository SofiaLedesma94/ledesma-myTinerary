import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import cityAction from '../redux/actions/cityAction'
import React, {useEffect} from 'react'


const CiudadFiltrada =(props)=>{
    useEffect(()=>{
        props.filtroCiudad()
    },[])

 
    return (
        <div className='city' key="keyCity">
            {props.buscador.map(item=>{
                return  <>
                  <div className='cities' key="cardCity" >
                  <Link to={`/itineraries/${item._id}`}>
                    <div className='cityImg' style={{ backgroundImage:`url(${item.url})`}}><p>
                     {item.ciudad}</p> </div>
                     </Link>
                  </div>
                  </>
            })}
          
        </div>
    )
}
const mapStateToProps = state =>{
    return {
      buscador: state.city.buscador
    }
  }
  
  
  const mapDispatchToProps ={
    filtroCiudad: cityAction.filtroCiudad
  }

export default connect(mapStateToProps, mapDispatchToProps) (CiudadFiltrada)