const Filtro =({buscar})=>{
    return(
        
            <input type='text' name='buscador' 
            placeholder="find your itinerary"  onChange={buscar} autocomplete="off"></input>
    )
}

export default Filtro