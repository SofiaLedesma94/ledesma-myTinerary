import {Link} from 'react-router-dom'
const Header =()=>{
  return(
    <div className='header'>
      <img src="./assets/login4.png" style={{width:'6vw'}}></img>
      <div className='nav'>
        <Link to="/">
        <button>Home</button>
        </Link>
        <Link to="/cities">
        <button>Citys</button>
        </Link>
        
      </div>
    </div>
  )
}

export default Header