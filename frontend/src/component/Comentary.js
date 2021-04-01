
import { connect } from 'react-redux'
import React, { useEffect, useState } from'react'
import itineraryAction from '../redux/actions/itineraryAction'
import EditComment from '../component/EditComment'
import DeleteIcon from '@material-ui/icons/Delete';




const Comentary =({allcomments,props})=>{

console.log(props.loggerUser.userName)


 const eliminarComment=async (comentario)=>{
  const respuesta = await props.deleteComment(props.idItinerario, comentario)
  if(respuesta){
   console.log(respuesta)
  }
}


    return(
      <>
       {allcomments.map(comment=>comment.comments.map(item=>{
           return(
              <div key={item._id} className="abmComentario">

                <h6 style={{marginLeft:'1vw'}}>{item.userName}</h6>

                <div className="abmComentarioFlex">
                  {props.loggerUser.userName === item.userName ? <><EditComment  comentario={item.comment} props={props} idComment={item._id}/>
                  <DeleteIcon onClick={()=>eliminarComment(item._id)} className="btnEditComment"/> </> : <h6>{item.comment}</h6>}

                   {/* <h6 onClick={()=>eliminarComment(item._id)} className="btnEditComment">Delete</h6> */}
                </div>
                
              </div>
           )
       }))}
      </>
    )
}


const mapDispatchToProps ={
  deleteComment : itineraryAction.deleteComment
}

export default connect (null, mapDispatchToProps)  (Comentary) 