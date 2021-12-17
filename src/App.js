import { useEffect, useState } from 'react';
import './App.css';
import { Route , Switch } from "react-router-dom";
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import { Link } from "react-router-dom";
import ContactDetail from './components/ContactDetail/ContactDetail';
import { getALLContacts } from './services/getAllContactsService';
import { deleteContacts } from './services/deleteContactService';
import { addOneContact } from './services/addContactService';

function App() {
  
  const [contacts, setContacts] = useState([]);
  
  const addContactHandler = async (contact) => {
    try{
      const {data} = await addOneContact(contact);
      setContacts([...contacts, data]);
    }
    catch(error){}
  }
  const deleteContractHandler = async (id) => {
    try{
      const filteredContacts = contacts.filter((contact) => contact.id !== id);
      setContacts(filteredContacts);
      await deleteContacts(id);
    }
    catch(error){}
  }

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

  // useEffect(()=>{
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);
  

  return (
    <main className="App">
      <h1>Contact App</h1>
      <Link to="./add" className="addBtn"><button>Add New Contact</button></Link>
      {/* <Switch>
        {routes.map((route)=>(
          <Route {...route}/>
        ))}
      </Switch> */}
      <Switch>
        <Route 
          path="/user/:id" 
          component={ContactDetail}
        />
        <Route 
          path="/add" 
          render={ (props) => 
          <AddContact 
            addContactHandler={addContactHandler} 
            {...props}
          />
          }
        />
        <Route 
          path="/" 
          exact 
          render={ (props) => 
          <ContactList 
            contacts={contacts} 
            onDelete={deleteContractHandler} 
            {...props}
          />}
        />
      </Switch>
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} onDelete={deleteContractHandler}/>  */}
    </main>
  );
}

export default App;
