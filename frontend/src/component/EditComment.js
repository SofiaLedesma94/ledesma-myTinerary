import { connect } from 'react-redux'
import React, {useState} from 'react'
import  itineraryAction from '../redux/actions/itineraryAction'

const EditComment =({comentario,props, idComment})=>{
 
  const [editar, setEditar] =useState(false)
  
  const [editedComment,setEditedComment] = useState(comentario)
    
  
  const editarComentario=()=>{
       setEditar(true)
      }
     
   
      const readInput =()=>{
        setEditedComment(document.getElementById('edited_comment').value)
      }
      
      const sendEditComment = async()=>{
        const respuesta = await props.editComment(props.idItinerario, idComment, editedComment)
        setEditar(false)
      }
    return(        
     <>
       {editar ? <div className="abmComentario">
        <input id='edited_comment' onChange={readInput} value={editedComment} style={{marginLeft:'1vw'}}/>
        <h6 onClick={()=>sendEditComment()} className="btnNewCommentEdit">Send new comment</h6>
       </div> : <h6>{comentario}</h6>}
       <h6 onClick={()=>editarComentario()} className="btnEditComment">Edit Comment</h6>
     </>
    )

}


const mapDispatchToProps ={
  editComment:itineraryAction.editComment
}

export default connect (null,mapDispatchToProps) (EditComment)