import React from "react";
import CardContact from "./ContactCard";

 const ContactList =(props)=>{
    console.log(props);

    const renderContactList = props.contacts.map((contact, index)=>{
        return(
            < CardContact contact={contact} key={index}></CardContact>
        );
    });
    return(
        <div className="ui celled list">
            { renderContactList }
        </div>
    );
 };


 export default ContactList;