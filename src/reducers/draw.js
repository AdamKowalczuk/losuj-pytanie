import {
  yesOrNot,
  crazy,
  aQuestionNoneAsked,
  philosophical,
  whatDoYouPrefer,
} from "../questions";
let availableQuestions = [];
let category;
let categoryEn;
let randomArray;
let defaultQuestion = {
  description: "Losuj pytanie",
  isUsed: false,
  category: "losowe",
};
function setQuestions(categoryEn) {
  switch (categoryEn) {
    case "random":
      randomArray = yesOrNot.concat(
        crazy,
        aQuestionNoneAsked,
        philosophical,
        whatDoYouPrefer
      );
      return randomArray;
    case "yesOrNot":
      return yesOrNot;
    case "crazy":
      return crazy;
    case "aQuestionNoneAsked":
      return aQuestionNoneAsked;
    case "philosophical":
      return philosophical;
    case "whatDoYouPrefer":
      return whatDoYouPrefer;
  }
}
const actualQuestionReducer = (state = defaultQuestion, action) => {
  switch (action.type) {
    case "SET_QUESTIONS":
      return state;
    case "SET_ACTUAL_QUESTION":
      availableQuestions = [];
      category = action.payload;
      categoryEn = setQuestions(category);
      for (let i = 0; i < categoryEn.length; i++) {
        if (categoryEn[i].isUsed === false) {
          availableQuestions.push(categoryEn[i]);
        }
      }
      if (availableQuestions.length === 0) {
        return {
          description: "Zadałeś wszystkie pytania!",
          category: "Brak pytań",
        };
      } else {
        let random = Math.floor(Math.random() * availableQuestions.length);
        availableQuestions[random].isUsed = true;
        return availableQuestions[random];
      }
    default:
      return state;
  }
};
export default actualQuestionReducer;
