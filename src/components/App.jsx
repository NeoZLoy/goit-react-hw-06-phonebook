import { useEffect, useState } from "react"
import { ContactsList } from "./ContactsList/ContactsList";
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { ContactsFilter } from "./ContactsFilter/ContactsFilter";
import { Section } from "./Section.styled";

const KEY = "localContacts";



const initialContacts = [
  {id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', tel: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', tel: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', tel: '227-91-26'}
];

const getInitialContacts = () => {
  const localContacts = localStorage.getItem(KEY)
    if(localContacts !== null){
      return JSON.parse(localContacts)
    } 
    return initialContacts
}

export const App = () => {

  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');
  const [haveContacts, setHaveContacts] = useState(true);

  const addContact = (newContact) => {
    if(contacts.find(contact => contact.name === newContact.name)){
      alert(`${newContact.name} is already in your phonebook`);
      return;
    }
    setContacts(prevState => [...prevState, newContact])
  }

  const deleteContact = (contactId) => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId))
  }

  const nameFilter = (contactName) => {
    setFilter(contactName);
  }

  const getVisibleContacts = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase()))
    
  }
  
  // put contacts to local storage
  useEffect(()=> {
      localStorage.setItem(KEY, JSON.stringify(contacts))
      if(contacts.length === 0){
        setHaveContacts(false)
      }
      if(contacts.length !== 0){
        setHaveContacts(true)
      }
  }, [contacts])
  
   return(
    <>
      <Section>
        <AddContactForm addContact = {addContact}/>
      </Section>
      <Section>
        <h2>Contacts:</h2>
        {haveContacts === true 
        ?(
        <>
            <ContactsFilter filter = {filter} onNameFilter = {nameFilter}/>
            <ContactsList contacts = {getVisibleContacts()} onDelete = {deleteContact}/>
          </>
          ):(
            <>
              <p>You don't have any contacts. Create a new one!</p>
            </>
          )}
      </Section>
    </>)}