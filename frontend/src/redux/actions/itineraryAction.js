import axios from 'axios'
 const itineraryAction={
    listaItinerarioPorCiudad:(id) =>{
        return async (dispatch, getState)=>{
            const data = await axios.get('http://localhost:4000/api/itineraries/'+id)
            dispatch({type:"ALLITINERARIES", payload: data.data.respuesta})
        }
    },
    commentsItineraries: comments=>{

        return async (dispatch, getState)=>{
             const respuesta = await axios.post('http://localhost:4000/api/comments', comments)
             console.log(respuesta)
            dispatch ({type:"COMMENTS", payload:respuesta.data.respuesta})
        }
    }
 }

export default itineraryAction