export const sundayReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TO_SUNDAY': return [...state, action.payload];
        case 'REMOVE_FROM_SUNDAY': return [state.filter((object)=>object.alias !== action.payload.alias)]


        default: return state
    }
}