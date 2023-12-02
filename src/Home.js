import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Home() {
  const [data, setData] = useState([]);
  const [logout, setlogout] = useState(false);
  const History = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    if(!localStorage.getItem('auth'))History("/");
  }, [logout]);

  const logouthandler = (event) => {
    event.preventDefault()
    localStorage.removeItem("auth");
    setlogout(true);
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("would you like to delete");
    if (confirm) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => {
          window.location.reload();
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div
      className="d-flex flex-column
     justify-content-center align-items-center bg-light h-100 py-5"
    >
      <h1>List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <button onClick={logouthandler} className="btn btn-warning me-5">
            Logout
          </button>
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                  <Link
                    to={`/read/${d.id}`}
                    className="btn btn-sm btn-info me-2"
                  >
                    Read
                  </Link>
                  <Link
                    to={`/update/${d.id}`}
                    className="btn btn-sm btn-primary me-2"
                  >
                    Edit
                  </Link>
                  <Link
                    onClick={(e) => handleDelete(d.id)}
                    className="btn btn-sm btn-danger "
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      
    </div>
  );
}

export default Home;
