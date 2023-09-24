import { initialState } from "./store"

export const nameFilter = (name) => {
    return{
        type: 'filters/nameFilter',
        payload: name,

    }
}

export const filtersReducer = (state = initialState.filters, action) => {
    switch (action.type) {
        case 'filters/nameFilter':
            return {
                ...state,
                name: action.payload,
            }
    
        default:
            return state;
    }
}