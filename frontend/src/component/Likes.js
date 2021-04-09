import { connect } from "react-redux"
import FavoriteIcon from '@material-ui/icons/Favorite';

const Likes =({likes,newLike})=>{
    console.log(newLike)
    console.log(likes)
    return(
        <>
        {newLike.like === 1 ? <FavoriteIcon style={{color:'red'}}/> :<FavoriteIcon style={{color:'gray'}} />}
        
        </>
    )
}

const mapStateToProps = state =>{
    return {
        Comments: state.itinerary.Comments 
    }
  }

export default connect(mapStateToProps) (Likes)