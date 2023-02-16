import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  let loc = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  console.log(loc);
    if(loc === null){
      console.log("if")
      loc = [];
    }
  const [contacts, setContacts]= useState(loc);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact])
  }; 
  
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    console.log(localStorage)
    console.log("updating local storage with",contacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
     
  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={ addContactHandler }/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
