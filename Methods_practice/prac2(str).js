var s1="I am really hungry for some ";

console.log(`Input String is: ${s1}`);

var sear_Really='really';

var index=s1.search(sear_Really);
var index2=s1.search('REALLY');
var word1=s1.substr(index, 10)
console.log(index, index2);
console.log(word1);
// REALLY was not present in the string so it returned -1 as output

sear_Really=sear_Really.toUpperCase();
// TO replace any string with another string
s1=s1.replace('really',sear_Really); 
console.log(s1);