import { useState } from "react"

const BotonVerMas =({actividades})=>{
  console.log(actividades)
  
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
    <button onClick={()=>setVisible(!visible)}>See Less</button>
    </>
    )}
    </>
)

}


export default BotonVerMas