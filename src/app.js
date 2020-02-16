const express=require('express');
const app=express()

app.set("PORT", process.env.port | 4000 )



module.exports=app
