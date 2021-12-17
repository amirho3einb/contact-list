import './ContactList.css';
import Contact from './Contact/Contact';
import { getALLContacts } from '../../services/getAllContactsService';
import { useState, useEffect } from 'react';
import { deleteContacts } from '../../services/deleteContactService';

const ContactList = () => {
    const [contacts, setContacts] = useState(null);
    useEffect(()=>{
        const getContacts = async () => {
          const { data } = await getALLContacts();
          setContacts(data);
        };
        try {
          getContacts();
        }
        catch(error) {}
    }, []);
    const deleteContractHandler = async (id) => {
        try{
          const filteredContacts = contacts.filter((contact) => contact.id !== id);
          setContacts(filteredContacts);
          await deleteContacts(id);
        }
        catch(error){}
    }
    return ( 
        <>
            {contacts ? contacts.map((contact) => {
                return(
                    <Contact contact={contact} onDelete={deleteContractHandler} key={contact.id}/>
                )
            }) : <p>loading</p>}
        </>
    );
}
export default ContactList;