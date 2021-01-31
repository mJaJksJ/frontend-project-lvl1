import readlineSync from 'readline-sync';

export const HelloFunc = function (){
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question("May I have your name? ");
    console.log(`Hello ${name}!`);
    return name;
}

export const CongratesFuns = function (name){
    console.log(`Congratulations, ${name}`)
}