import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();
    useEffect(() => {
      axios
        .get("http://localhost:3000/users/"+ id)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }, []);
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-5 pb-5 rounded'>
        <h3>Details of users</h3>
        <div className='mb-3 mt-3'>
          <strong>Name: {data.name}</strong>
        </div>
        <div className='mb-3'>
          <strong>email: {data.email}</strong>
        </div>
        <div className='mb-3'>
          <strong>phone: {data.phone}</strong>
        </div>
        <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
        <Link to='/Home' className="btn btn-primary ms-3">Back</Link>
      </div>
      
    </div>
  )
}

export default Read
