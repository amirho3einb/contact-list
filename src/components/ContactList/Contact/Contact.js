import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = ({contact, onDelete}) => {
    const { name, email, id} = contact;
    return ( 
        <div key={id} className='contactRow'>
            <div>
                <div><FaUserAlt /></div>
                <Link to={{ pathname: `user/${id}` , state:{contact: contact} }}>
                    <div className="detail">
                        <div><span>name : </span>{name}</div>
                        <div><span>email : </span>{email}</div>
                    </div>
                </Link>
            </div>
            <div>
                <Link to={`/edit/${id}`}><button className="edit">Edit</button></Link>
                <button onClick={() => onDelete(id)}>delete</button>
            </div>
        </div>
    );
}
 
export default Contact;