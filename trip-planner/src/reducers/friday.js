export const fridayReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TO_FRIDAY': return [...state, action.payload];
        case 'REMOVE_FROM_FRIDAY': return [state.filter((object)=>object.alias !== action.payload.alias)]


        default: return state
    }
}