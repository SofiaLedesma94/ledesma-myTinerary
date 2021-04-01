import {connect} from 'react-redux'
import {useEffect, useState} from 'react'
import swal from 'sweetalert'
import  itineraryAction from '../redux/actions/itineraryAction'
import Comentary from '../component/Comentary'
import SendIcon from '@material-ui/icons/Send';
const Comments = (props)=>{
    const [comments,setComment] =useState({})
    const validaComments= e =>{
     const  valor= e.target.value
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
        e.preventDefault()
      if(comments.comment === ''){
          alert('complete campos')
          return false
      }
      const respuesta = await props.commentsItineraries(comments)
      if(respuesta && !respuesta.success){
          console.log(respuesta)
      }
    }

    

 return (
          <>
             <div>
             
             {props.itineraries.map(item=>{
                 return(
                    <div key={item._id}>
                     <Comentary allcomments={props.itineraries} props={props}/>      
                   </div>
                 )
             })}
             </div>
         
           <div className="abmComentarioFlex">
            <input placeholder="enter comment" name="comment" onChange={validaComments} style={{marginLeft:'1vw', width:'40vw', 
            marginRight:'1vw', padding:'0px', textAlign:'center', border:'0'}}></input>

            <SendIcon onClick={(e)=>enviarComment(e)} className="btnEditComment"/>
           
          </div>  
          </>  
         )

}

const mapStateToProps = state =>{
    return {
        loggerUser: state.auth.loggerUser,
        Comments: state.itinerary.Comments,
        itineraries: state.itinerary.itineraries
    }

}

const mapDispatchToProps ={
    commentsItineraries : itineraryAction.commentsItineraries,
    deleteComment : itineraryAction.deleteComment,
    editComment: itineraryAction.editComment
}

export  default connect (mapStateToProps, mapDispatchToProps) (Comments)