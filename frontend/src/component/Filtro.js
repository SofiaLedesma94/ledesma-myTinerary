const Filtro =({info,buscar})=>{
    return(
        
            <input type='text' name='buscador' 
        placeholder="find your itinerary" value={info} onChange={buscar}></input>
        
        
    )
}

export default Filtro