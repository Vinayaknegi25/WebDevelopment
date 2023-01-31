function strUp(s){
    return s.toUpperCase();
}

console.log(strUp("hello"));




function addNums ( num1, num2) {
    var sum = num1 + num2;
    console.log (sum);
}
addNums ( 4, 3 );



// to generate a random number

function ran(){
    return Math.random();
    // range is from 0 to ->1 not 1 (0 inclusive 1 exclusive)
}

function randomInt ( min, max ){
    var numOfValues = max - min + 1;
    var randomNum = Math. random () ;
    var randomVal = randomNum * numOfValues;
    var roundedVal =Math.floor( randomVal);
    var finalNumber = min+roundedVal
    console.log(finalNumber);
}
var num = 0;
num=ran();
console.log (num);
randomInt( 5, 10 ); 
// gives a value between 5 and 10
