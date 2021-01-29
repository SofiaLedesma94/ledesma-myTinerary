import axios from 'axios'
const cityAction ={
listarCiudades: ()=>{
    return async (dispatch,getState)=>{
        //codigo asincrono 
        //pedido fecth axion
        const data = await axios.get('http://localhost:4000/api/cities')
        dispatch({type: "ALL_CITIES", payload: data.data.respuesta})
    }
}
}

export default cityAction