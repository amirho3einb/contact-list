import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';

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
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} onDelete={deleteContractHandler}/> 
    </main>
  );
}

export default App;
