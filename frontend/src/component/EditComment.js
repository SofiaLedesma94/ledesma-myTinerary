import { connect } from 'react-redux'
import React, {useState} from 'react'
import  itineraryAction from '../redux/actions/itineraryAction'
import EditIcon from '@material-ui/icons/Edit';
import SendIcon from '@material-ui/icons/Send';

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
        <input id='edited_comment' onChange={readInput} value={editedComment} style={{marginLeft:'1vw', 
        textAlign:'center',border:'0', borderRadius:'10px', width:'30vw'}}/>
        
        <SendIcon onClick={()=>sendEditComment()} className="btnNewCommentEdit"/>

       </div> : <h6 style={{textAlign:'center',
      border:'0', marginLeft:'1vw', backgroundColor:'white',width:'30vw', padding:'1px'}}>{comentario}</h6>}
      
       <EditIcon  onClick={()=>editarComentario()} className="btnEditComment"/>
       
     </>
    )

}


const mapDispatchToProps ={
  editComment:itineraryAction.editComment
}

export default connect (null,mapDispatchToProps) (EditComment)