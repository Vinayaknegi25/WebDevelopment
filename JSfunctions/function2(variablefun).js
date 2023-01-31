const prompt = require("prompt-sync")({sigint: true});
// to take input we neet to inpore prompt 
var greeting= function (){
    var name= prompt("Hello, please enter your name ");
    console.log(`Welcome ${name}`);
}
greeting();