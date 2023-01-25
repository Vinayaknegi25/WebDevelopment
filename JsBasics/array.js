var animals = ['Dogs', 'Cat', 'Hen', 'llamas', 'Goat', 'Peacock'];

console.log(animals);

animals.push('Tiger'); //push element at the back of the array

console.log(animals);

animals.splice(0,2); // Remove elements between the given indexes

console.log(animals);

animals.sort(); // Sort accorfing to thie first alphabet of teh array elements
console.log(animals);

animals.pop(); // Removes the last element from the array
console.log(animals); 

var car=['Ford', 'Mahindra', 'Honda']; 
let rem=car.shift(); //removes the first array element and "shifts" all other elements to a lower index.
console.log(car); 
console.log(rem); //return the shifted value


var bike= ['Suzuki','Hero', 'Yahama']; // adds a new element at the beginning,and "unshifts" older elements
let count=bike.unshift('TVS');// return the new array length
console.log(bike);
console.log(count);

// Concat two arrays.

var boys= ['Ansh', 'Aman', 'Yash'];
var girls= ['Anjali', 'Aishwarya', 'Mohini'];

var final=boys.concat(girls); // boy array + girl array 
console.log(final);
final=girls.concat(boys);
console.log(final); // girl array + boy array 

//Merging 3 arrays

var arr1=["a", "b", "c", "d", "e"];
var arr2=["f", "g", "h", "i", "j"];
var arr3=["k", "l", "m", "n", "o"];

var all=arr1.concat(arr2,arr3);
console.log(all);

//COnverting arrays to strings
const fruits=["Banana","Apple","Orange"];
console.log(fruits.toString());


//Method selects elements from the start argument, and up to (but not including) the end argument.
const fruitarr = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const vitc=fruitarr.slice(1);
console.log(vitc);
console.log(fruitarr);
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source array.

fruitarr.reverse();
console.log(fruitarr);
// Reverse an array