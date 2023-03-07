import React from "react";
import { Link, useLocation } from "react-router-dom";
import defalt from '../images/default.png';
function ContactDetails() {
    const location=useLocation();
    console.log(location)
    const {name,number}=location.state.contact;
    return (
         <>
         <div className="mx-auto card w-50">
            <div>
                <img src={defalt} className="d-block card-img-top mx-auto rounded w-50" alt="contact"></img>
            </div>
            <div className="card-body">
                <h3 className="card-title">Name:{name}</h3>
                <h4 className="card-text">Contact No:{number}</h4>
            </div>
            
         </div>
         <div className="d-block text-center">
            <Link to={'/'}>
            <button className="btn btn-primary">Go back to List</button>
            </Link>
        </div>
         </>
    )
}
export default ContactDetails;