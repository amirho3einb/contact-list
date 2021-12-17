import { useState } from "react";
import { addOneContact } from "../../services/addContactService";
import './addContact.css';

const AddContact = ({history}) => { 
    const [contact, setContact] = useState({ name: "", email: ""});
    const chnageHandler = (e) => {
        setContact({...contact, [e.target.name] : e.target.value})
    }

    const submitForm = async (e) => {
        if( !contact.name || !contact.email){
            alert("all fields are mandatory !");
            return;
        }
        e.preventDefault();
        try{
            await addOneContact(contact);
            setContact({ name: "", email: ""})
            history.push("/");
        }
        catch(error){}
    }
    return ( 
        <form onSubmit={submitForm}>
            <div className="formControl">
                <label>name</label>
                <input 
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={chnageHandler}
                />
            </div>
            <div className="formControl">
                <label>email</label>
                <input 
                    type="text"
                    name="email"
                    value={contact.email}
                    onChange={chnageHandler}
                />
            </div>
            <button type="submit">Add contract</button>
        </form>
    );
}
 
export default AddContact;