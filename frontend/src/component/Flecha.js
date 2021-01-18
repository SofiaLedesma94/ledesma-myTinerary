import{Link} from 'react-router-dom'
const Flecha =()=>{
    return (
        <div className="flecha">
            
            <Link to="/cities">
            <img src="./assets/click.jpg" alt="imagen de flecha"></img>
            </Link>   
        </div>
    )
}
export default Flecha