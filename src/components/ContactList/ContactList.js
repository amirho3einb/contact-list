const ContactList = ({ contacts, onDelete }) => {
    return ( 
        <>
            {contacts.map((contact) => {
                const { name, email, id} = contact;
                return(
                    <div key={id}>
                        <div>name : {name}</div>
                        <div>email :{email}</div>
                        <button onClick={() => onDelete(id)}>delete</button>
                    </div>
                )
            })}
        </>
    );
}
export default ContactList;