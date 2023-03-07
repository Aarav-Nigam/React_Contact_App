import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';
function ContactList(props) {
    let contacts_tag = props.contacts.map((contact) => {
        return <ContactCard contact={contact} delete_contact={props.delete_contact} />
    })
    return (
        <>
            <p className='h3 d-inline text-start'>&nbsp; &nbsp;Contacts:</p>

            <Link to={'/add'}>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button className="btn btn-primary me-md-2" type="button">Add</button>
                </div>
            </Link>
            {contacts_tag}
        </>
    )
}

export default ContactList;