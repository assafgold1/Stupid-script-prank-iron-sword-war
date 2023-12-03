const otafaza = 6653;
const zikim = 6645;
const mirim = 6665;
const gafen = 6677;
const tiros = 6688;
const zrifin = 4215;
const rishonLeZionEast = 6699;
const rishonLeZionWest = 6700;

console.log("Home Front Command Exercise Activation");

const prompt = require('prompt-sync')();

const userChoice = parseInt(prompt("Dear commander, please enter the city code to activate a red color exercise in the requested city: "));

if (userChoice === otafaza) {
    console.log("City: Otef Aza | Interface Connection to the Home Front Command Observers | Interface Model: ECN3000 | Exercise Initiated Successfully");
} else if (userChoice === zikim) {
    console.log("City: Zikim | Interface Connection to the Home Front Command Observers | Interface Model: ECN3000 | Exercise Initiated Successfully");
} else if (userChoice === mirim) {
    console.log("City: Mirim | Interface Connection to the Home Front Command Observers | Interface Model: ECN3000 | Exercise Initiated Successfully");
} else if (userChoice === gafen) {
    console.log("City: Gafen | Interface Connection to the Home Front Command Observers | Interface Model: ECN3000 | Exercise Initiated Successfully");
} else if (userChoice === tiros) {
    console.log("City: Tiros | Interface Connection to the Home Front Command Observers | Interface Model: ECN3000 | Exercise Initiated Successfully");
} else if (userChoice === zrifin) {
    console.log("City: Zrifin | Interface Connection to the Home Front Command Observers | Interface Model: ECN3000 | Exercise Initiated Successfully");
} else if (userChoice === rishonLeZionWest) {
    console.log("City: Rishon Le Zion - West | Interface Connection to the Home Front Command Observers | Interface Model: ECN3000 | Exercise Initiated Successfully");
} else if (userChoice === rishonLeZionEast) {
    console.log("City: Rishon Le Zion - East | Interface Connection to the Home Front Command Observers | Interface Model: ECN3000 | Exercise Initiated Successfully");
} else {
    console.log("Invalid choice. Please enter a valid city code to activate the exercise.");
}
