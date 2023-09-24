import { ContactsList } from "./ContactsList/ContactsList";
import { AddContactForm } from "./AddContactForm/AddContactForm";
import { ContactsFilter } from "./ContactsFilter/ContactsFilter";
import { Section } from "./Section.styled";

export const App = () => {
  
   return(
    <>
      <Section>
        <AddContactForm/>
      </Section>
      <Section>
        <h2>Contacts:</h2>
         <>
            <ContactsFilter/>
            <ContactsList />
          </>
         <>
            <p>You don't have any contacts. Create a new one!</p>
          </>
        
            
          
      </Section>
    </>)}