const Fotos=(props)=>{
 return (
    <div className='contenidoTitulo' >
    <img src={props.img} alt="imagen myTinerary"></img>
    <p>{props.title}</p>
  </div>
 )
}

export default Fotos