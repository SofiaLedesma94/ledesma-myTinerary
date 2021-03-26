import { useState } from "react"
import Comments from './Comments'


const BotonVerMas =({actividades,id})=>{

  
const [visible,setVisible]=useState(false)
return(<>
    <button onClick={()=>setVisible(!visible)}>view more</button>
    {visible &&
    (
      <>
       <div className="containerActivities">
     {actividades.map(actividad=>{
       return<>
      
       <div className="containerImg" key={actividad._id}>
         <p>{actividad.activityTitle}</p>
       <img src={actividad.activityImage} alt="descripcion de imagen"></img>
       </div>
       </>
     })}
     </div>
     <Comments idItinerario={id}/>
    <button onClick={()=>setVisible(!visible)}>See Less</button>
    </>
    )}
    </>
)

}


export default   BotonVerMas