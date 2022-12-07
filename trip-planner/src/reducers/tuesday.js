export const tuesdayReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TO_TUESDAY': return [...state, action.payload];
        case 'REMOVE_FROM_TUESDAY': return [state.filter((object)=>object.alias !== action.payload.alias)]


        default: return state
    }
}