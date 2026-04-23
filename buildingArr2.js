
//Task 1: Initialize the Array

let greetingArr = Array(7).fill("Hello");
console.log("Total elements in this array:",greetingArr.length);

//Task 2: Update the Array
greetingArr = Array(7).fill("Hola",0,3);
console.log(greetingArr);


//Task 3: Populate the Array with a for Loop
let numsArr = Array(5);
for( i=0;i<numsArr.length;i++){
    numsArr[i] = i*10;
} console.log("Array Values :",numsArr);