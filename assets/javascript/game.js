let hit = 0;
//Team 1 shoot code
let shots1 = 0;
let goal1 = 0;
const numshots1 = document.querySelector("#teamone-numshots");
const shotButton1 = document.querySelector("#teamone-shoot-button")
const numgoal1 = document.querySelector("#teamone-numgoals")
shotButton1.addEventListener("click", function () {
    shots1++;
    numshots1.innerHTML = shots1;
    hit = Math.random();
    if (hit > .5) {
        goal1++;
        numgoal1.innerHTML = goal1;
    }
})
//Team 2 shoot code
let shots2 = 0;
let goal2 = 0;
const numshots2 = document.querySelector("#teamtwo-numshots");
const shotButton2 = document.querySelector("#teamtwo-shoot-button")
const numgoal2 = document.querySelector("#teamtwo-numgoals")
shotButton2.addEventListener("click", function () {
    shots2++;
    numshots2.innerHTML = shots2;
    hit = Math.random();
    if (hit > .5) {
        goal2++;
        numgoal2.innerHTML = goal2;
    }
})
//Reset code
let resets = 0;
const numresets = document.querySelector("#num-resets");
const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", function() {
    resets++;
    numresets.innerHTML = resets;
    shots1 = 0, shots2 = 0;
    goal1 = 0, goal2 = 0;
    numgoal1.innerHTML = goal1, numgoal2.innerHTML = goal2;
    numshots1.innerHTML = shots1, numshots2.innerHTML = shots2;
})