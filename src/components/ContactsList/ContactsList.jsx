import { StyledContactItem, StyledDeleteButton, StyledList } from "./ContactsList.styled"


export const ContactsList = ({contacts, onDelete}) => {
    return(
        <StyledList>
            {contacts.map(contact => {
                return(
                    <StyledContactItem key = {contact.id}>
                        <span>{contact.name}:</span>  <span>{contact.tel}</span>
                        <div>
                        <StyledDeleteButton
                         type="button" onClick={() => onDelete(contact.id)}>Delete</StyledDeleteButton> 
                        </div>
                        
                    </StyledContactItem>
                )
            })}
        </StyledList>
    )
}