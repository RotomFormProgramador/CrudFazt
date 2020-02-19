const {Schema,model} =require('mongoose')


const userShema= new Schema({
    userName:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
},  {timestamps:true
})

module.exports = model('User',userShema)