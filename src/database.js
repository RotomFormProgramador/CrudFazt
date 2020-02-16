const mongoose =require('mongoose')


mongoose.connect(process.env.URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const connection=mongoose.connection

connection.once('open',()=>{
    console.log('Databse is connected')
})

