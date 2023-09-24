import { initialState } from "./store"

export const addContact = (contact) => {
    
    return {
        type: 'contacts/add',
        payload: contact,
    }
}

export const removeContact = (contact) => {
    return {
        type: 'contacts/remove',
        payload: contact,
    }
}


export const contactsReducer = (state = initialState.contacts.list, action,) => {
    switch (action.type) {
        case 'contacts/add':
            return [...state, action.payload]  
            
        case 'contacts/remove':
            return state.filter(contact => contact.id !== action.payload)
        default:
            return state;
    }
}