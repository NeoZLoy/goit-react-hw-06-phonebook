import { devToolsEnhancer } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

export const initialState = {
    contacts:
    {
        list: [
            {id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', tel: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', tel: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', tel: '227-91-26'}
          ],
        
    },
    filters: {
        name: ""
    }
    
}

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer,
    
})

const enhancer = devToolsEnhancer()


export const store = createStore(rootReducer, enhancer)

