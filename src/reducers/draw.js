import {questions,yesOrNot,music} from '../questions'
let availableQuestions = [];
let category
let categoryEn
let randomArray
function setQuestions(categoryEn){
    switch(categoryEn){
        case 'random':
            randomArray=yesOrNot.concat(music)
            return randomArray;
        case 'music':
            console.log("Muzyka:",music);
            return music;
        case 'yesOrNot':
            return yesOrNot;
    }

}
const actualQuestionReducer = (state = questions, action) => {

    switch (action.type) {
        case "SET_QUESTIONS":
            return state;
        case "SET_ACTUAL_QUESTION":
            availableQuestions=[]
            category=action.payload
            console.log(category);
            categoryEn=setQuestions(category)
            console.log(categoryEn);
            for (let i = 0; i < categoryEn.length; i++) {
                if (categoryEn[i].isUsed === false) {
                    availableQuestions.push(categoryEn[i])
                }
            }
            console.log("AvailableQuestions:",availableQuestions);
            if (availableQuestions.length === 0) {
                return {
                    description: "Zadałeś wszystkie pytania!",
                    category: "Brak pytań",
                };
            }
            else {
                let random = Math.floor(Math.random() * availableQuestions.length);
                console.log(random);
                availableQuestions[random].isUsed = true;
                return availableQuestions[random];
            }

        default:
            return {
                description: "Losuj pytanie",
                isUsed: false,
                category: "losowe",
            };
    }
}

export default actualQuestionReducer;