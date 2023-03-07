import React, { useEffect, useState } from 'react'; 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import uuid from 'react-uuid';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList'
import ContactDetails from './ContactDetails';
function App() {
  const key='All_Contacts';
  var retcontact=JSON.parse(localStorage.getItem(key));
  if (!retcontact) retcontact=[];
  const [contacts,setContacts]=useState(retcontact);
  function insert_contact(contact){
    setContacts([...contacts,{id:uuid(),...contact}]);
  }
  function delete_contact(id){
    var newContacts=contacts.filter((contact)=>{return contact.id!==id});
    setContacts(newContacts);
  }
  useEffect(()=>{
    console.log('contact_render_use_effect')
    localStorage.setItem(key,JSON.stringify(contacts));
  },[contacts])
  
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='React_Contact_App/' element={<ContactList contacts={contacts} delete_contact={delete_contact}/>}/>
      <Route path='React_Contact_App/add' element={<AddContact insert={insert_contact}/>} />
      <Route path='React_Contact_App/contact/:id' element={<ContactDetails/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
