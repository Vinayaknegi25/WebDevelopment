const merge = require("nodemon/lib/utils/merge");

var cheese="yummy";
var age=20;
console.log(age)
console.log(cheese);
// no need to define a variable using var keyword but it would be better to use var keyword
myPhone=987576848737;
console.log(myPhone)



var notNum="5";
// this is a string
var aNum=15;
// javascript is loosely typed
console.log(aNum+notNum);



var num=5;
var numAsaString="5";
var obj=null;
// to get the type of any variable
console.log(typeof(num));
console.log(typeof(obj));



// arrays in JS
var colors = new Array("Red", "Blue", "Green", "Yellow", "Black");
console.log(colors[0]);
// we can also write the same using the following syntax
var newColor=["Red", "Blue", "Green", "Yellow", "Black"];

console.log(colors[3]);
// size of array can be retrieved using the following method

console.log(colors.length);