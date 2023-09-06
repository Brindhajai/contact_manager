import React, { useEffect , useState } from 'react'
import { Link,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';

const Edit = () => {

  const {id} = useParams();
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const contacts = useSelector(state=>state);
  const currentContact = contacts.find( contact => contact.id === parseInt(id)); 
  console.log(currentContact);
  
  useEffect(()=>{
    if(currentContact){
    setName(currentContact.name);
  setNumber(currentContact.number);
  setEmail(currentContact.email);
  setDob(currentContact.dob);
}}

,[currentContact]);

const [name,setName] =  useState("");
const [number,setNumber] =  useState("");
const [email,setEmail] =  useState("");
const [dob,setDob] =  useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();

    const checkEmail = contacts.find(contact => contact.id!==parseInt(id) && contact.email === email );

    const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === parseInt(number) );

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
      id : parseInt(id),
      name,
      number,
      email,
      dob
    };

    dispatch({type:"EDIT_CONTACT" , payload:data});
    toast.success("contact updated successfully");
    navigate("/");
}
  return (
    <div className='container'>
      {currentContact ? (
      <>
        <h1 className='display-3 my-5 text-center'>EDIT CONTACT {id}</h1>
      <div className="row">
        <div className='col-md-6 shadow mx-auto p-5'>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-2">
              <input type="text" placeholder="Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="form-group mb-2">
              <input type="number" placeholder="Phone number" className="form-control" value={number} onChange={(e)=>setNumber(e.target.value)} />
            </div>
            <div className="form-group mb-2">
              <input type="email" placeholder="Email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="form-group mb-2">
              <input type="date" placeholder="DOB" className="form-control" value={dob} onChange={(e)=>setDob(e.target.value)} />
            </div>
            <div className='form-group'>
              <input type="submit" value="Update" className='btn btn-dark'/>
              <Link to="/" className='btn btn-danger ml-3'>Cancel</Link>
            </div>
          </form>
       </div>
      </div>
      </>
      ):(
        <h1 className='display-3 my-5 text-center'>Contact with id {id} doesn't exist</h1>
      )
      }
    </div>
  )
}

export default Edit