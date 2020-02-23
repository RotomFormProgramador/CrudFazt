import React, { useEffect,useState } from "react";
import axios from "axios";

function CreateUser() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:4000/api/users");
      setUsers(res.data);
    }

    fetchData();
     
  });

  function onChangeUser(e) {
    setUserName(e.target.value)
  }

  async function onSubmit(e) {
    e.preventDefault()
    console.log('sdds')
    await axios.post("http://localhost:4000/api/users",{userName})
  }
 
  return (
    <div className="row CreateNote">
      <div className="col-md-4">
        <div className="card card-body">
          <h3>Create new User</h3>
          <form onSubmit={onSubmit} action="">
            <div className="form-group">
              <input type="text" className="form-control" name="Hola mundo" onChange={onChangeUser}   />
            </div>
            <button type='submit' className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
      <div className="col-md-8">
        <ul className="list-group">
          {users.map(user => {
            return (
              <li
                key={user._id}
                className="list-group-item list-group-item-action"
              >
                {user.userName}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CreateUser;
