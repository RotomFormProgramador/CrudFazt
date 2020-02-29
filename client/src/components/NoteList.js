import React, { useState, useEffect } from 'react'
import axios from 'axios'
import serverUrl from '../proxy'
import {format} from 'timeago.js'
import {Link} from 'react-router-dom'


function  NotesList (){
    const [state,setState]=useState([])


    async function fecht(){
        const res= await axios.get(serverUrl+"/api/notes")
        setState( res.data)

    }

    useEffect(()=>{
        fecht()

    },[])

    async function deleteNote(id){
        console.log(id)
       await axios.delete(serverUrl+"/api/notes/"+id)
       fecht()
    }
    

    return(
        <div className="NoteList row">
        {
             state.map(note=> (
             <div key={note._id} className="col-md-4 p-2">
                <div  className="card">
                <div className="card-header d-flex justify-content-between">
                <h5>{note.title}</h5>
                <Link className="btn btn-warning" to={"/edit/"+note._id}>Edit</Link>
                
                </div>
                    <div className="card-body">
                    <p>{note.content}</p>
                    <p>{note.author}</p>
                    <p>{format(note.date)}</p>
                    </div>
                </div>
                <div className="card-footer">
                <button className="btn btn-danger" onClick={()=>deleteNote(note._id)}>Delete</button>
                </div>
        </div> ))  
        }
        </div>
    )
}
       

export default  NotesList