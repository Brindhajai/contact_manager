import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
const Add = () => {
  const [name,setName] =  useState("");
  const [number,setNumber] =  useState("");
  const [email,setEmail] =  useState("");
  const [dob,setDob] =  useState("");

  const contacts =useSelector((state)=>state); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmit=(e)=>{
      e.preventDefault();

      const checkEmail = contacts.find(contact=>contact.email === email && email);

      const checkNumber = contacts.find(contact=>contact.number === parseInt(number) && number);

      if( !email || !number || !name || !dob){
        return toast.warning("Please fill all fields!");
      }

      if(checkEmail){
        return toast.error("This email already exists");
      }

      if(checkNumber){
        return toast.error("This number already exists");
      }

      const data = {
        id : contacts[contacts.length - 1].id + 1,//to create new id 
        name,
        number,
        email,
        dob
      };

      dispatch({type:"ADD_CONTACT" , payload:data})
      toast.success("contact added");
      navigate("/");
  }
  return (

      <div className='container'> 
        <h1 className='display-3 my-5 text-center'>ADD CONTACT</h1>
      
        <div className="row">
        <div className='col-md-6 shadow mx-auto p-5'>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <input type="text" placeholder="Name" className="form-control" value={name} onChange={e=>setName(e.target.value)} />
            </div>
            <div className="form-group mb-2">
              <input type="number" placeholder="Phone number" className="form-control" value={number} onChange={e=>setNumber(e.target.value)} />
            </div>
            <div className="form-group mb-2">
              <input type="email" placeholder="Email" className="form-control" value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
            <div className="form-group mb-2">
              <input type="date" placeholder="DOB" className="form-control" value={dob} onChange={e=>setDob(e.target.value)} />
            </div>
            <div className='form-group'>
              <input type="submit" value="Add" className='form-control btn btn-block btn-dark' onClick={handleSubmit}/>
            </div>
          </form>
       </div>
      </div>
    </div>
    
  )
}

export default Add