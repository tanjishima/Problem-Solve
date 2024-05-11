// 1. find the maximum between two numbers
let maximum=45;
let minimum=30;

if(maximum>minimum){
    console.log(maximum);
}else{
    console.log(minimum);
}

// 2. check a number is negative, positive or zero

let number=50;

if(number>=90){
    console.log("The number is positive");
}
else if(number>=60){
    console.log("The number is negative");
}else{
    console.log("The number is zero");
}
// 3.  check a number is divisible by 10 or not
let divisibleNum = 75;

if (divisibleNum % 10===0) {
  console.log("The number is divisible");
} else {
  console.log("The number is not divisible");
}

// 4.  check a number is even or odd. 

let num=13;

if(num % 2===0){
    console.log("The number is even");
}else{
    console.log("The number is odd");
}

//  5. check a character is in the alphabet or not.

let  character="A"

if((character>="A" && character<="Z")||
(character>="a" && character<="z")){
    console.log("This character is  alphabet");
}else{
    console.log("This character is not alphabet");
}

// 6. check  the temperature is hot, cold or normal 

let temperature=29;

if(temperature >= 30){
    console.log("The weather is hot");
}else if(temperature<=25){
    console.log("The weather is cool");
}else{
    console.log("The weather is normal");
}

// 7.  find a maximum between three numbers for that  use logical and operator 

let num1=100;
let num2=85;
let num3=80;

if (num1>num2 && num1>num3){
    console.log("Maximum number is ",num1);
}
else if(num2>num1 && num2>num3){
    console.log("Maximum number is",num2);
}else{
    console.log("Maximum number is",num3);
}

// 8. using the ternary operator a number x is even or odd.
let x=10;

x%2===0
?console.log("X number is even")
:console.log("X number is odd");

// 9. Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30
 
let numberone=50;
let numbertwo=40;

if(numberone>30 && numbertwo>30){
    console.log("Both number greater than 30");
}else{
    console.log("Both are not greater than 30");
}

// 10.  a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager

let age=15;

if(age>=13  && age<=19){
    console.log("Teenager");
}else{
    console.log("Not a teenager");
}
