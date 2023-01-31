for ( var i = 1; i < 10; i++)
{
    console.log(i);
}
// for loop

// LOOPS in arrays

var colors=['R','G','B','Y','W'];
for(var i=0;i<colors.length;i++)
{
    console.log(colors[i]);
}

// FOR.. of loop
console.log("Using For.. of loop")
for(EachColor of colors)
{
    console.log(EachColor);
}

// Strings as an Array
console.log("STRING AS AN ARRAY");
var statement= "We can use a String as an Array in JavaScript";

for(var i=0; i<statement.length; i++)
{
    console.log(statement[i]);
}


// WHILE LOOPS 

var j=0;
var text="";

while(j<10)
{
    text+='Line Number: ${j} \n'; 
    j++;
}

console.log(text);