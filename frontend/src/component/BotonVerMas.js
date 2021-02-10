import { useState } from "react"
import Comments from './Comments'


const BotonVerMas =({usuariosPic,actividades})=>{

  
const [visible,setVisible]=useState(false)
return(<>
    <button onClick={()=>setVisible(!visible)}>view more</button>
    {visible &&
    (
      <>
       <div className="containerActivities">
     {actividades.map(actividad=>{
       return<>
      
       <div className="containerImg">
         <p>{actividad.activityTitle}</p>
       <img src={actividad.activityImage} alt="descripcion de imagen"></img>
       </div>
       </>
     })}
     </div>
     <Comments usuarios={usuariosPic}/>
    <button onClick={()=>setVisible(!visible)}>See Less</button>
    </>
    )}
    </>
)

}


export default   BotonVerMas