const mongoose =require('mongoose')
mongoose.set('bufferCommands', false)
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(respuesta => console.log('Database connected'))
.catch(error => console.log(error))