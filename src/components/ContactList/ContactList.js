import './ContactList.css';
import Contact from './Contact/Contact';
import { getALLContacts } from '../../services/getAllContactsService';
import { useState, useEffect } from 'react';
import { deleteContacts } from '../../services/deleteContactService';

const ContactList = () => {
    const [contacts, setContacts] = useState(null);
    const [allContacts, setAllContacts] = useState(null);
    const [searrchTerm, setSearrchTerm] = useState("");
    useEffect(()=>{
        const getContacts = async () => {
          const { data } = await getALLContacts();
          setContacts(data);
          setAllContacts(data);
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

    const searchHandler = (e) => {
        setSearrchTerm(e.target.value);
        // filter contacts
        const search = e.target.value;
        if(search !== ""){
            const filteredContacts = allContacts.filter( c => {
                return Object.values(c)
                .join(" ")
                .toLowerCase()
                .includes(search.toLowerCase());
            });
            setContacts(filteredContacts);
        }
        else{
            setContacts(allContacts);
        }
    }
    return ( 
        <>
            <div><input type="text" value={searrchTerm} onChange={searchHandler} placeholder='Search contact ...'/></div>
            {contacts ? contacts.map((contact) => {
                return(
                    <Contact contact={contact} onDelete={deleteContractHandler} key={contact.id}/>
                )
            }) : <p>loading</p>}
        </>
    );
}
export default ContactList;