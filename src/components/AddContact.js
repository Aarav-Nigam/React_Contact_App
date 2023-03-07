import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
function AddContact(props){
    const navigate=useNavigate();
    const [contact,setContact]=useState({name:"",number:""});
    function add(e){
        e.preventDefault();
        if(contact.name==="" || contact.number===""){alert("All inputs are Mandatory")}
        else {props.insert(contact)}
        setContact({name:"",number:""});
        navigate('/');
    }
    return (
        <div className="Add">
            <h2 className='d-block text-center'>Add Contact</h2>
            <form onSubmit={add} className='d-block text-center'> 
                <label className="form-label d-block">Name:&nbsp;
                {/* Here we used value={contact.name || ""} this is used to avoid warning of undefined type*/}
                <input type="text" className="w-25 form-control d-inline" placeholder="Name" name="name" value={contact.name || ""} onChange={(e)=>{setContact({name:e.target.value})}}/>
                </label>
                <label className="form-label d-block">Mobile Number:&nbsp;
                <input type="number" className="w-25 form-control d-inline" placeholder="1234XXXXXX" name="number" value={contact.number || ""} onChange={(e)=>{setContact({name:contact.name,number:e.target.value})}}/>
                </label>
                <br/>
                <button className="btn btn-dark">Add</button>
            </form>
        </div>
    )
}
export default AddContact