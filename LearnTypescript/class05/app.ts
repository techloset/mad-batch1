var num1: number = 10;
var num2: number = 10;

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else if (num2 == num1) {
  console.log("num2 is equal num1");
} else {
  console.log("num2 is greater than num1");
}

// write a ts program to check number is positive or negative or zero
// if (num1 > 0) {
//     console.log("number is positive");
// }
// else if(num1 == 0){
// console.log("number is equal to zero");
// }
// else{
//     console.log("number is negative");
// }

// if (num1 > num2) {
//     console.log("num1 is greater than num2");
// }
// else if(num1 < num2){
//     console.log("num2 is greater than num1");
//     }

// else {
//     console.log("num2 is equal num1");
// }

// if(num2 == num1){
// console.log("num2 is equal num1");
// }
var grade: string = "A";

if (grade == "A") {
  console.log("Grade is A");
} else if (grade == "B") {
  console.log("Grade is B");
} else if (grade == "C") {
  console.log("Grade is C");
} else {
  console.log("Default case means Grade is not A, B or C");
}



switch (grade) {
  case "A": {
    console.log("Grade is A");
    break;
  }
  case "B": {
    console.log("Grade is A");
    break;
  }
  case "C": {
    console.log("Grade is A");
    break;
  }
  default: {
    console.log("Default case means Grade is not A, B or C");

    break;
  }
}
var userInput = prompt("Enter your Email")
console.log("userInput",userInput);

