import readlineSync from "readline-sync";

export const Play = function (){
    console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");
    let rightAnsNum = 0;
    while (rightAnsNum < 3){
        rightAnsNum += Question(100);
    }
}

const Question = function (maxNum){
    const question = Math.floor(Math.random() * maxNum);
    console.log(`Question: ${question}`);
    const ans = readlineSync.question("Your answer: ");
    const verdict = isCorrectAns(question,ans);
    console.log(verdict[0]);
    return verdict[1];
}

const isCorrectAns = function (question, ans){
    const bool = ['yes', 'no'];
    if(bool[question % 2] === ans){
        return ['Correct!', 1];
    }
    return ['Incorrect!', -1];
}