import { ContactsList } from "./ContactsList/ContactsList";
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { ContactsFilter } from "./ContactsFilter/ContactsFilter";
import { Section } from "./Section.styled";
import { useSelector } from "react-redux";

export const App = () => {
  const contacts = useSelector(state => state.contacts)
   return(
    <>
      <Section>
        <AddContactForm/>
      </Section>
      <Section>
        <h2>Contacts:</h2>
        {contacts.length > 0
        ? <>
            <ContactsFilter/>
            <ContactsList />
          </>
        : <>
            <p>You don't have any contacts. Create a new one!</p>
          </>

      }
        
         
            
        
            
          
      </Section>
    </>)}