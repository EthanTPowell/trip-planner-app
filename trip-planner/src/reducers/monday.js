export const mondayReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TO_MONDAY': return [...state, action.payload];
        case 'REMOVE_FROM_MONDAY': return [state.filter((object)=>object.alias !== action.payload.alias)]


        default: return state
    }
}