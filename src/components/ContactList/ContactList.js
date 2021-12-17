import './ContactList.css';
import Contact from './Contact/Contact';

const ContactList = ({ contacts, onDelete }) => {
    return ( 
        <>
            {contacts.map((contact) => {
                return(
                    <Contact contact={contact} onDelete={onDelete} key={contact.id}/>
                )
            })}
        </>
    );
}
export default ContactList;