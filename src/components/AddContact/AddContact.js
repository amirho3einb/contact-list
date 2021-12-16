import { useState } from "react";

const AddContact = ({addContactHandler}) => { 
    const [contact, setContact] = useState({ name: "", email: ""});
    const chnageHandler = (e) => {
        setContact({...contact, [e.target.name] : e.target.value})
    }
    const submitForm = (e) => {
        e.preventDefault();
        addContactHandler(contact);
        setContact({ name: "", email: ""})
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