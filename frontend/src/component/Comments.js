import {connect} from 'react-redux'
import {useEffect, useState} from 'react'
import swal from 'sweetalert'
import  itineraryAction from '../redux/actions/itineraryAction'

const Comments = (props)=>{
    const [comments,setComment] =useState({})

    const validaComments= e =>{
     const  valor= e.target.value.trim()
     const comment=e.target.name
      
      setComment( 
            {  
                id:props.itineraries[0]._id,
             [comment]: valor,
             userName: props.loggerUser.userName,
             userPic: props.loggerUser.userPic
            }
      )
    }
  
  
    

    const enviarComment = async  e =>{
      if(comments.comment === ''){
          alert('complete campos')
          return false
      }
      const respuesta = await props.commentsItineraries(comments)
      if(respuesta && !respuesta.success){
          console.log(respuesta)
      }
    }
    console.log(props.itineraries)
    console.log(props.comments)

 return (
          <>
          {props.itineraries[0].comments.map(item=>{
                return(
                    <>
                    <h6>{item.userName}</h6>
                    <img src={item.userPic} style={{width:"8vw"}}></img>
                    <p>{item.comment}</p>
                    </>
                )
            })}
         
           <div>
            <input placeholder="enter comment" name="comment" onChange={validaComments}></input>
            <button onClick={enviarComment} >enviar</button>
          </div>  
          </>  
         )

}

const mapStateToProps = state =>{
    return {
        loggerUser: state.auth.loggerUser,
        comments: state.itinerary.comments,
        itineraries: state.itinerary.itineraries
    }

}

const mapDispatchToProps ={
    commentsItineraries : itineraryAction.commentsItineraries
}

export  default connect (mapStateToProps, mapDispatchToProps) (Comments)