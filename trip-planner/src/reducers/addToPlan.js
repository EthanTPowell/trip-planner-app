export const addToPlanReducer = (state={sun:[],mon:[],tues:[], wed:[], thurs:[], fri:[], sat:[]}, action) => {
    switch (action.type) {
        case 'ADD_TO_SUNDAY': return [...state.sun,] ;
        case 'ADD_TO_MONDAY': return state;
        case 'ADD_TO_TUESDAY': return state;
        case 'ADD_TO_WEDNESDAY': return state;
        case 'ADD_TO_THURSDAY': return state;
        case 'ADD_TO_FRIDAY': return state;
        case 'ADD_TO_SATURDAY': return state;

        default: return state
    }
}