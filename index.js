//Your Code here

const name = window.prompt ("What do we call you?")
let firstAnswer = window.prompt("You're at a crossroads, do you head left or right?")
console.log(firstAnswer)

//If user picked left...
if (firstAnswer === "left") {
    console.log("user picked left");
    const secondAnswer = window.prompt(`${name} You chose to go left and you encountered a dragon!  Do you fight or run?`);
    console.log(secondAnswer);
    if (secondAnswer === "run") {
        window.alert(`Too bad ${name}, you lost your damsel for showing cowardice`);
    } else if (secondAnswer === "fight") {
        window.alert("Congratulation, you defeated the dragon and obtained three golden dragon eggs");
    console.log(secondAnswer);
    } 
}

//If user picked right...
else if(firstAnswer === "right") {
    console.log("user picked right");
    const secondAnswer = window.prompt(`${name} You chose to go right and you encountered a lagoon!  Do you take a swim or move on?`);
    console.log(secondAnswer);
    if (secondAnswer === "swim") {
        window.alert(`Good thinking ${name}, you've discovered a sword`);
    } else if (secondAnswer === "move on") {
        window.alert(`${name} You are now heading into the enchanted forest`);
    console.log(secondAnswer);
    
    }
}

//If user picked neither
else {
    console.log("User can't read.  Game over.")
}




