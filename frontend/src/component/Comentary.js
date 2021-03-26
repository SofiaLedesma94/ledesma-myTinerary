
import { connect } from 'react-redux'
import React, { useEffect, useState } from'react'
import itineraryAction from '../redux/actions/itineraryAction'
import EditComment from '../component/EditComment'


const Comentary =({allcomments,props})=>{




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
                  <EditComment  comentario={item.comment} props={props} idComment={item._id}/>

                   <h6 onClick={()=>eliminarComment(item._id)} className="btnEditComment">Delete</h6>
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