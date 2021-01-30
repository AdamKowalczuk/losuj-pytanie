let category={
    categoryPl:'losowe',
    categoryEn:"random"
}
const categoryReducer = (state = category, action) => {

    switch (action.type) {
        case "SET_CATEGORY":
            return action.payload;
        default:
            return state
    }
}

export default categoryReducer;