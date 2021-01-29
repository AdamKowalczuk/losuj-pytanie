

export const setActualQuestion = () => {
    return {
        type: 'SET_ACTUAL_QUESTION',
    }
};


export const setCategory = (category) => {
    return {
        type: 'SET_CATEGORY',
        payload: category
    }
};
