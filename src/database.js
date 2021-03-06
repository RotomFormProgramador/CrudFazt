const mongoose =require('mongoose')


mongoose.connect(process.env.URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
})

const connection=mongoose.connection

connection.once('open',()=>{ 
    console.log('Database is connected')
})

