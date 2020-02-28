import React, { useState, useEffect } from 'react'
import axios from 'axios'
import serverUrl from '../proxy'


function  NotesList (){
    const [state,setState]=useState([])

    async function fecht(){
        const res= await axios.get(serverUrl+"/api/notes")
        setState( res.data)
        console.log("Hola mundo f")

    }

    useEffect(()=>{
        fecht()
    },[])
    return(
        <div className="NoteList row">
        {
             state.map(note=> (
             <div key={note._id} className="col-md-4 p-2">
                <div  className="card">
                    <div className="card-body">
                    <p>{note.content}</p>
                    </div>
                </div>
        </div> ))  
        }
        </div>
    )
}
       

export default  NotesList