const notesCtrl={}


notesCtrl.getNotes=(req,res)=>{res.json({message:[]})}
notesCtrl.createNote=(req,res)=>{res.json({message:"Note Saved"})}

notesCtrl.getNote=(req,res)=>{res.json({title:"Junior es guapo"})}
notesCtrl.updateNote=(req,res)=>{res.json({message:"Note updated"})}
notesCtrl.deleteNote=(req,res)=>{res.json({message:"Note deleted"})}


module.exports =notesCtrl