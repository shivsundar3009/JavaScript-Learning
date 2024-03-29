let score = "shivsundar"

//console.log(typeof score);
//console.log(typeof(score));

// TO convert any value into number we use 'Number(value)' 

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "shivsundar"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false // empty strings returns false
// "shivsundar" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");

// if we use string value in front it treats all values after it as a string
// console.log("1" + 2 + 2);

// if we use string in last it treats all before values as a number 
// console.log(1 + 2 + "2");

// this will print '357' all values from string will be treated as a string
// console.log(1 + 2 + '5' + 7);

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); // 1
// console.log(true+); // error
// console.log(+""); // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter); // 101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
