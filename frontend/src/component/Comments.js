import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import swal from 'sweetalert'
import  itineraryAction from '../redux/actions/itineraryAction'
const Comments = (props)=>{
    const [comments,setComment] =useState({})

    const validaComments= e =>{
     const  valor= e.target.value.trim()
      
      setComment( 
            {comment: valor,
             userName: props.loggerUser.userName,
             userPic: props.loggerUser.userPic   
           }   
      )
    }
 
  console.log(comments)
    const enviarComment = async  e =>{
       if(comments.comment === ''){
           swal('empty comment')
       }
      const respuesta = await props.commentsItineraries(comments)
      console.log(respuesta)
      if( respuesta && !respuesta.success){
          alert('error')
      }
    }
   
  return (
          <>
           <div>
            <input placeholder="enter comment" name="comments" onChange={validaComments}></input>
            <button onClick={enviarComment} >enviar</button>
          </div>  
          </>  
         )

}

const mapStateToProps = state =>{
    return {
        itineraries : state.itinerary.itineraries,
        loggerUser: state.auth.loggerUser
    }

}

const mapDispatchToProps ={
    commentsItineraries : itineraryAction.commentsItineraries,
    listaItinerarioPorCiudad: itineraryAction.listaItinerarioPorCiudad
}

export  default connect (mapStateToProps, mapDispatchToProps) (Comments)