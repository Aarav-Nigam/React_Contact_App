import React from "react";
import defalt from '../images/default.png';
import { Link } from "react-router-dom";
function contact_card(props) {
    const {id,name,number}=props.contact;
    return (
        <div className='card d-flex flex-row'>
            <div className="text-start"><img width={"50"} src={defalt} alt={"Person"}></img></div>
            <div className="w-75">
                {/* Backtics are used because it is a expression */}
                <Link to={`/contact/${id}`} state={{contact:props.contact}}>
                <div className='text-start fw-bold text-dark'>{name}</div>
                <div className='text-start fw-semibold text-dark'>{number}</div>
                </Link>
            </div>
            <div className="text-end"><i className="bi bi-trash h1" onClick={() => props.delete_contact(props.contact.id)}></i></div>
        </div>
    )
}
export default contact_card;