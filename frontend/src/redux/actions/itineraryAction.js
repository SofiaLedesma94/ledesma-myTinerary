import axios from 'axios'
 const itineraryAction={
    listaItinerarioPorCiudad:()=>{
        return async (dispatch, getState)=>{
            const data = await axios.get(`/api/itineraries`)
            dispatch({type:"ALLITINERARIES", payload: data.data.respuesta})
        }
    }
 }

export default itineraryAction