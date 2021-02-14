
const isCategorySelectedReducer = (state = false, action) => {

    switch (action.type) {
        case "SET_CATEGORY_TO_ACTIVE":
            return !state;
        default:
            return state
    }
}

export default isCategorySelectedReducer;