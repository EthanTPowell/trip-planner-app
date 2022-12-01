export const searchResultsReducer = (state = [{businessName: 'reformation', businessType: 'brewery'}], action) => {
    switch (action.type) {
        case "STORE_RESULTS": return action.payload ;
        default: return state;
    }
}