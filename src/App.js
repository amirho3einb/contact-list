import { useEffect, useState } from 'react';
import './App.css';
import { Route , Switch } from "react-router-dom";
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import { Link } from "react-router-dom";
import ContactDetail from './components/ContactDetail/ContactDetail';

function App() {
  
  const [contacts, setContacts] = useState([]);
  
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: Math.ceil(Math.random() * 100), ...contact }]);
  }
  const deleteContractHandler = (id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
  }

  // CDM => get data
  // contacts => save => 
  useEffect(()=>{
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if(savedContacts){
      setContacts(savedContacts);
    }
  }, []);
  useEffect(()=>{
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  

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
