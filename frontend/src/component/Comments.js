import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import itineraryAction from '../redux/actions/itineraryAction'
const Comments = (props,{usuarios})=>{
    const [comment,setComment] =useState([])
    const validaComments= e =>{
     const  valor= e.target.value
      
      setComment(
         [
            {comments: valor,
             userName: usuarios.userName,
             userPic: usuarios.userPic
            }
         ]
      )
    }
    const enviarComment = e =>{
        if(comment.comments !==  ' ' ){
            console.log(comment)
        }else{
            alert('completar')
        }
    }

    useEffect(()=>{
        props.commentsItineraries(comment)
    })
  

   return (
       <>

       <div>
        <input placeholder="enter comment" name="comments" onChange={validaComments}></input>
         <button onClick={enviarComment} >enviar</button>
      </div>
            
       
         </> 
   )

}
const mapDispatchToPorps = {
    commentsItineraries: itineraryAction.commentsItineraries
}
export  default connect (mapDispatchToPorps) (Comments)