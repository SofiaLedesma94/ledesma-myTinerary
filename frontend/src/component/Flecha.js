import{Link} from 'react-router-dom'
const Flecha =()=>{
    return (
        <div className="flecha">
            <h5 className='tituloclickheare'>looking for itineraries?</h5>
            <Link to="/cities">
             <div>
              <h5 className='tituloclickheare'> click hear !</h5>
             </div> 
            </Link> 
        </div>
    )
}
export default Flecha