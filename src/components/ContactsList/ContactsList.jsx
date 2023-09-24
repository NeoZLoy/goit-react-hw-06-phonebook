import { useDispatch, useSelector } from "react-redux";
import { StyledContactItem, StyledDeleteButton, StyledList } from "./ContactsList.styled"
import { removeContact } from "redux/contactsSlice";



export const ContactsList = () => {

    const contacts = useSelector(state => state.contacts);
    const nameFilter = useSelector(state => state.filters.name)
    const dispatch = useDispatch();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(nameFilter.toLowerCase()))
    return(
        <StyledList>
            {visibleContacts.map(contact => {
                return(
                    <StyledContactItem key = {contact.id}>
                        <span>{contact.name}:</span>  <span>{contact.tel}</span>
                        <div>
                        <StyledDeleteButton
                         type="button" onClick={() => dispatch(
                            removeContact(contact.id)
                            )}>Delete</StyledDeleteButton> 
                        </div>
                        
                    </StyledContactItem>
                )
            })}
        </StyledList>
    )
}