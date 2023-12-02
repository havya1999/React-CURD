import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Create() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();
  const handlesubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users", values)
      .then(res => {
        console.log(res);
        navigate('/Home');
      })
      .catch((err) => console.log(err));
  }
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
              onChange={e => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              class="form-control"
              placeholder="Enter Email"
              onChange={e => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div class="mb-3">
            <label for="phone">Phone</label>
            <input
              type="text"
              name="phone"
              class="form-control"
              placeholder="Enter phone"
              onChange={e => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <button type="submit" class="btn btn-success">
            Submit
          </button>
          <Link to="/Home" className="btn btn-primary ms-3">
            Back
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Create;
