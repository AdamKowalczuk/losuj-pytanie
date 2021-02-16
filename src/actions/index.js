export const setActualQuestion = (category) => {
  return {
    type: "SET_ACTUAL_QUESTION",
    payload: category,
  };
};

export const setCategory = (category) => {
  return {
    type: "SET_CATEGORY",
    payload: category,
  };
};

export const setMode = (mode) => {
  return {
    type: "SET_GAMEMODE",
    payload: mode,
  };
};

export const setExp = (exp) => {
  return {
    type: "SET_EXP",
    payload: exp,
  };
};

export const setLevel = (level) => {
  return {
    type: "SET_LEVEL",
    payload: level,
  };
};

export const setRequiredExp = (requiredExp) => {
  return {
    type: "SET_REQUIRED_EXP",
    payload: requiredExp,
  };
};

export const setAchievementsOpen = () => {
  return {
    type: "SET_IS_ACHIEVEMENTS_OPEN",
  };
};

export const increment = (number) => {
  return {
    type: "INCEREMENT",
    payload: number,
  };
};

export const changeActive = (number) => {
  return {
    type: "CHANGE_ACTIVE",
    payload: number,
  };
};

export const setPlayers = (name) => {
  return {
    type: "SET_PLAYERS",
    payload: name,
  };
};

export const addPlayer = (number) => {
  return {
    type: "ADD_PLAYER",
    payload: number,
  };
};
export const deletePlayer = () => {
  return {
    type: "DELETE_PLAYER",
  };
};

export const changeName = (e, id) => {
  return {
    type: "CHANGE_NAME",
    payload: e.target.value,
    id: id,
  };
};

export const startGame = () => {
  return {
    type: "START_GAME",
  };
};
export const changeActualPlayer = (id) => {
  return {
    type: "CHANGE_ACTUAL_PLAYER",
    payload: id,
  };
};
export const setCategoryToActive = () => {
  return {
    type: "SET_CATEGORY_TO_ACTIVE",
  };
};

export const disableMenu = () => {
  return {
    type: "DISABLE_MENU",
  };
};

export const setLevelFromLocalStorage = (level) => {
  return {
    type: "SET_LEVEL_FROM_LOCALSTORAGE",
    payload: level,
  };
};
export const setExpFromLocalStorage = (exp) => {
  return {
    type: "SET_EXP_FROM_LOCALSTORAGE",
    payload: exp,
  };
};
export const setRequiredExpFromLocalStorage = (requiredExp) => {
  return {
    type: "SET_REQUIREDEXP_FROM_LOCALSTORAGE",
    payload: requiredExp,
  };
};

export const getCounterFromLocalStorage = (requiredExp) => {
  return {
    type: "GET_COUNTER_FROM_LOCALSTORAGE",
    payload: requiredExp,
  };
};
