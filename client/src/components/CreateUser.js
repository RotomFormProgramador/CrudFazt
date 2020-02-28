import React, { useEffect, useState } from "react";
import axios from "axios";
import serverUrl from '../proxy'
function CreateUser() {
    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState("");



     async function fetchData() {
        const res = await axios.get(serverUrl + "/api/users");
        setUsers(res.data);
    }

    useEffect(() => {


        fetchData();

    }, []);

   

    function onChangeUser(e) {
        setUserName(e.target.value)
    }

    async function onSubmit(e) {
        e.preventDefault()
        await axios.post(serverUrl + "/api/users", { userName })
        setUserName("")
        await fetchData()

    }
    async function deleteUser(user) {

        await axios.delete(serverUrl + "/api/users/"+user)
        await fetchData()
    }

    return (
        <div className="row CreateNote">
            <div className="col-md-4">
                <div className="card card-body">
                    <h3>Create new User</h3>
                    <form onSubmit={onSubmit} action="">
                        <div className="form-group">
                            <input value={userName} type="text" className="form-control" onChange={onChangeUser} />
                        </div>
                        <button type='submit' className="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
            <div className="col-md-8">
                <ul className="list-group">
                    {users.map(user => {
                        return (

                            <div
                                key={user._id}
                            >
                                <li
                                    className="list-group-item list-group-item-action"
                                >
                                    {user.userName} ____________________
                                    <button  onClick={()=>deleteUser(user._id)} className="btn btn-danger">X</button>
                                </li>
                            </div>

                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default CreateUser;
