const counterReducer = (state = 0, action) => {

    switch (action.type) {
        case "INCEREMENT":
            return state+action.payload;
        default:
            return state
    }
}

export default counterReducer;