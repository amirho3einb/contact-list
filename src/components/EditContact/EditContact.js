import { useEffect, useState } from "react";
import { getOneContact } from "../../services/getOneContactService";
import { updateContact } from "../../services/updateContactService";

const EditContact = ({ history, match }) => { 
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
            await updateContact(match.params.id, contact);
            setContact({ name: "", email: ""})
            history.push("/");
        }
        catch(error){}
    }
    useEffect(()=>{
        const localFetch = async () => {
            try{
                const {data} = await getOneContact(match.params.id);
                setContact({name: data.name, email:data.email});
            }
            catch(error){}
        }
        localFetch();
    },[])
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
            <button type="submit">update contract</button>
        </form>
    );
}
 
export default EditContact;