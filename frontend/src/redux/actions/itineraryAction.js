import axios from 'axios'
 const itineraryAction={
    listaItinerarioPorCiudad:(id) =>{
        return async (dispatch, getState)=>{
            const data = await axios.get('http://localhost:4000/api/itineraries/'+id)
            dispatch({type:"ALLITINERARIES", payload: data.data.respuesta})
        }
    }
 }

export default itineraryAction