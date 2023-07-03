import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {

const [users ,setUsers] =useState({});

const navigate= useNavigate();

const dispatch = useDispatch();

const getUserData = (e)=>{
    setUsers({...users , [e.target.name] : e.target.value})
console.log(users);
}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    dispatch(createUser(users));
   navigate ("/read");
  };


  return (
    <div>
        <h2 className='my-2 mx-auto my-50'>Enter Your Details</h2>
     <form className='w-50 mx-auto my-50' onSubmit={handleSubmit}>
      <div className="mb-3">
      <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
        <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
        <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter age"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        
        <div className="mb-3">
  <input className="form-check-input" type="radio" name="gender" value="Male"   onChange={getUserData}/>
  <label className="form-check-label">
   Male
  </label>
</div>
<div className="mb-3">
  <input className="form-check-input" type="radio" name="gender" value="Female"   onChange={getUserData}/>
  <label className="form-check-label">
  Female
  </label>
</div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Create
