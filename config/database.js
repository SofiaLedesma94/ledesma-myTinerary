const mongoose =require('mongoose')
//conexion a BD
mongoose.connect('mongodb+srv://sofiledesma:paramore@cluster0.xwhfl.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(respuesta => console.log('Database connected'))
.catch(error => console.log(error))