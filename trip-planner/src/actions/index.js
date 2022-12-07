export const storeResults = (object) => {
    return {
        type: "STORE_RESULTS",
        payload: object
    }
};
export const addToMonday = (object) => {
    return {
        type: "ADD_TO_MONDAY",
        payload: object
    }
}