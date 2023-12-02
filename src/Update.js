import React, { useState, useEffect } from "react";
import { Link, useParams ,useNavigate} from "react-router-dom";
import axios from "axios";
function Update() {
  // const [data, setData] = useState([]);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const handlesubmit = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:3000/users/"+id, values)
      .then(res => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/" + id)
      .then((res) => {
        setValues(res.data)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-5 pb-5 rounded">
        <h1>Add a users</h1>
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label for="name">Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              class="form-control"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Enter Email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label for="phone">Phone</label>
            <input
              type="text"
              name="phone"
              class="form-control"
              placeholder="Enter phone"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <button type="submit" class="btn btn-success">
            Update
          </button>
          <Link to="/Home" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Update;
