// Complete the Code and Fill in The Blanks!
//
// 1. Concatenating words together such as first and last name.
//    Change the code shown below to be a String Concat Method
//
// let coffee = “French”;
// let flavor = “Vanilla”;
// let order = coffee + “ ” + flavor;
// console.log(order);

console.log(`#1`);
let coffee = "French";
let flavor = "Vanilla";
let space = " ";
let order = coffee.concat(space, flavor);
console.log(order);

// 2. Templating where we insert variables into a string to create a dynamic string
//    Write the proper syntax to have the console.log method show the the following using templating:
//
// I have 3 coffees.
// I also have 10 chais.
// I have a total of 13 drinks total.
//
// let coffee = 3;
// let chai = 10;
// console.log(`________________`);
// console.log(`_________________`);
// console.log(`_________________`);

console.log(`#2`);
let coffee2 = 3;
let chai = 10;
console.log(`I have ${coffee2} coffees.`);
console.log(`I also have ${chai} chais.`);
console.log(`I have a total of ${coffee2 + chai} drinks.`);

// 3. Searching the String on content!
//    indexOf String Method: Find where 42 occurs
//
// function myFunction() {
//   let str = "Can you guess what is the index of 42 is? I am sure you will be surprised!";
//   let answer = ____________________;
//   console.log(answer);
// };

console.log(`#3a`);
myFunction3a();

function myFunction3a() {
    let str3a = "Can you guess what the index of 42 is? I am sure you will be surprised!";
    let answer3a = str3a.indexOf("42");
    console.log(answer3a);
}

// length method: Find how long the string is!
//
// function myFunction() {
//   let str = "Can you guess how long this string is? I am sure you will be surprised! (Hint:It is not 42.)";
//   let answer = _____________________;
//   console.log(answer);
// };

console.log(`3b`);
myFunction3b();

function myFunction3b() {
    let str3b = "Can you guess how long this string is? I am sure you will be surprised! (Hint: It is not 42.)";
    let answer3b = str3b.length;
    console.log(answer3b);
}

// 4. Replacing values in a string.
//
// function myFunction() {
//   let str1 = "How you doin?";
//   let str2 = ___________________________;
//   console.log(str2);
// };

console.log(`#4`);
myFunction4();

function myFunction4() {
  let str1 = "How you doin'?";
  let str2 = str1.replace("you", "we");
  console.log(str2);
}

// 5. Using Trim Method for strings.
//
// function myFunction() {
//   var str = "         SOCIAL DISTANCING!!!                    ";
//   alert(______________________);
// };

console.log(`#5`);
myFunction5();

function myFunction5() {
  var str5 = "         SOCIAL DISTANCING!!!                    ";
  alert(str5.trim());
  console.log(str5.trim());
}

// 6. Making strings case sensitive
//    * toUpperCase
//
// function myFunction() {
//   let str = "social distancing!!";
//   let res = ___________________;
//   console.log(res);
// };

console.log(`6a`);
myFunction6a();

function myFunction6a() {
  let str6a = "social distancing!!";
  let res6a = str6a.toUpperCase();
  console.log(res6a);
}

//    * toLowerCase
//
// function myFunction() {
//   let str = "QuiEt VoICeS...PLEASE";
//   console.log(res);
// }

console.log(`6b`);
myFunction6b();

function myFunction6b() {
  let str6b = "QuiEt VoICeS...PLEASE";
  let res6b = str6b.toLowerCase();
  console.log(res6b);
}
