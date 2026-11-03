import { connect } from 'react-redux'
import{Link} from 'react-router-dom'
import swal from 'sweetalert'
const Flecha =(props)=>{

    const denegado =()=>{
        swal('Error! you should log in')
    }
    return (
        <div className="flecha">
            <h5 className='tituloclickheare'>looking for itineraries?</h5>
            {props.loggerUser ? <> <Link to="/cities">
             <div>
              <h5 className='tituloclickheare'> click hear !</h5>
             </div> 
            </Link></> : <h5 className='tituloclickheare' onClick={denegado}> click hear !</h5>}
        </div>
    )
}

const mapStateToProps = state =>{
    return{
     loggerUser : state.auth.loggerUser
    }
   }
export default connect (mapStateToProps) (Flecha)