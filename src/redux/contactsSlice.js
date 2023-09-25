import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', tel: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', tel: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', tel: '227-91-26'}
      ],
    }


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialState.contacts,
    reducers:{
        addContact: {
            reducer(state, action){
            state.push(action.payload)
            }
        },
        removeContact: {
            reducer(state, action){
                return state.filter(contact => contact.id !== action.payload)
            }
        }
    }
})

export const {addContact, removeContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;