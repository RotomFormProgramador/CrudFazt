const usersCtrl={}

usersCtrl.getUsers=(req,res)=>{res.json({message:[]})}
usersCtrl.createUser=(req,res)=>{res.json({message:"User creacted"})}

usersCtrl.deleteUser=(req,res)=>{res.json({title:"User delete"})}

module.exports =usersCtrl