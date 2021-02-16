const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCEREMENT":
            return state+action.payload;
        case "GET_COUNTER_FROM_LOCALSTORAGE":
            return action.payload
        default:
            return state
    }
}
export default counterReducer;