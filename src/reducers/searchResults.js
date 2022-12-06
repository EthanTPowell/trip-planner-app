export const searchResultsReducer = (state = [], action) => {
    switch (action.type) {
        case "STORE_RESULTS": return action.payload ;
        default: return state;
    }
}