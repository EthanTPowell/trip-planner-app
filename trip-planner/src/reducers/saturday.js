export const saturdayReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TO_SATURDAY': return [...state, action.payload];
        case 'REMOVE_FROM_SATURDAY': return [state.filter((object)=>object.alias !== action.payload.alias)]


        default: return state
    }
}