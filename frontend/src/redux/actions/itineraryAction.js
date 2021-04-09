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
             const respuesta = await axios.post('http://localhost:4000/api/comments', comments)
            dispatch ({type:"COMMENTS", payload:respuesta.data.respuesta})
        }
    },
    deleteComment: (iditinerario,idcomment)=>{
        return async (dispatch, getState)=>{
            const respuesta =await axios.delete('http://localhost:4000/api/comments/'+iditinerario+'/'+idcomment)
            dispatch ({type:"COMMENTS", payload:respuesta.data.response})
        }
    },
    editComment: (iditinerario, idcomment, editedComment)=>{
        return async (dispatch, getState)=>{
            
            const respuesta = await axios.put('http://localhost:4000/api/comments/'+iditinerario+'/'+idcomment,{editedComment})
            dispatch ({type:"COMMENTS", payload:respuesta.data.response})
        }
    },
    valorattion:(iditinerario,like)=>{
        return async (dispatch,getState)=>{
            const data = await axios.put('http://localhost:4000/api/itinerarios/'+iditinerario,{like})
            console.log(data)
            dispatch ({type:"VALORATION", payload:data.data.response})
        }
    }
 }

export default itineraryAction