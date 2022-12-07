export const wednesdayReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TO_WEDNESDAY': return [...state, action.payload];
        case 'REMOVE_FROM_WEDNESDAY': return [state.filter((object)=>object.alias !== action.payload.alias)]


        default: return state
    }
}