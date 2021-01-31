
const requiredExpReducer = (state = 10, action) => {

    switch (action.type) {
        case "SET_REQUIRED_EXP":
            return Math.round(state*action.payload);
        default:
            return state
    }
}

export default requiredExpReducer;