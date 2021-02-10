import axios from 'axios'
 const itineraryAction={
    listaItinerarioPorCiudad:(id) =>{
        return async (dispatch, getState)=>{
            const data = await axios.get('http://localhost:4000/api/itineraries/'+id)
            dispatch({type:"ALLITINERARIES", payload: data.data.respuesta})
        }
    },
    commentsItineraries: (comments)=>{

        return async (dispatch, getState)=>{
             const respuesta = await axios.put('http://localhost:4000/api/itineraries', comments)
            dispatch ({type:"COMMENTS", payload:respuesta.data.response})
        }
    }
 }

export default itineraryAction