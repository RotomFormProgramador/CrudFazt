import React, { useEffect, useState } from 'react'
import serverUrl from '../proxy'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function CreateNote() {
    const [users, setUsers] = useState([])
    const [userselect, setUsersSelect] = useState("")
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")
    const [date,setDate]=useState(new Date()) 



    async function fetchData() {
        const res = await axios.get(serverUrl + "/api/users");
        setUsers(res.data);
        setUsersSelect(res.data[0].userName)
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    function onTitleChange (e){
        setTitle(e.target.value)
    }

    async function onSubmit(e) {
        const newnote={
            title,
            content,
            date,
            author:userselect
        }
        e.preventDefault()
       axios.post(serverUrl+"/api/notes",newnote)
    }

    function onInputChange(e) {
        setUsersSelect(e.target.value)

    }
    function onContentChange(e) {
        setContent(e.target.value)
    }

    function onDateChange(date){
        setDate(date)
    }

    return (

        <div className="CreateNote col-md-6 offset-md-3">
            <div className="card card-body">
                <h4>Creacte a note</h4>
                <form onSubmit={onSubmit}>

                    <div className="form-group">
                        <select name="userSeleted"
                            className="form-control"
                            onChange={onInputChange}
                            value={userselect}>
                            {
                                users.map(user =>
                                    <option value={user.userName} key={user._id}>
                                        {user.userName}
                                    </option>
                                )
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            name="title"
                            value={title}
                            onChange={onTitleChange}
                            required />
                             
                            
                    </div>

                    <div className="form-group">
                        <textarea 
                            name="content"
                            className="form-control"
                            placeholder="Content"
                            value={content}
                            onChange={onContentChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                    <DatePicker 
                    className="form-control"
                    selected={date}
                    onChange={onDateChange}
                    />
                    </div>

                    <button className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>
    )
}

export default CreateNote