export const thursdayReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TO_THURSDAY': return [...state, action.payload];
        case 'REMOVE_FROM_THURSDAY': return [state.filter((object)=>object.alias !== action.payload.alias)]


        default: return state
    }
}