import{Link} from 'react-router-dom'
const Flecha =()=>{
    return (
        <div className="flecha">
            <h4>Looking for itineraries? Click Here!</h4>
            <Link to="/citys">
            <img src="./assets/flecha5.jpg" alt="imagen de flecha"></img>
            </Link>   
        </div>
    )
}
export default Flecha