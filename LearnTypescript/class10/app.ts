// functions 
export {}


// function addNumbers(...numbers:any[]) {

// console.log("numbers",numbers);
// }

// addNumbers(1,2,3,4)

// function addNumbers2(numbers:number[]) {

//     // console.log("numbers",numbers);
//     }
    
//     addNumbers2([1,2,3,4])
    

// [[1,2],[12,[12,31]],121]

// // [1,2,12,12,31,121]



// local scope variable 

// global scope variable
// var myName:string = "naveed"

// (function(num1:number){
//     // local scope variable
//     var anOtherName:string = "newValue"
// console.log("hell world with out names");

// })(2)

// if(true){
//     let anOtherName:string = "newValue"
//     const anOtherName2:string = "newValue"
// }


// const pi = 3.14
// var newThing = "something"




// const myFunc = function() {
//     console.log("my functions");
// }

// myFunc()
// var i:number = 0
// function myFunction() {
//     if(i >= 5) {
//         return 
//     }
//     console.log("my functions", i);
//     i++
//     myFunction()
// }
// myFunction()


const myFunction = (num1:number,num2:number) => num1 + num2


const myFunction2 = (num1:number,num2:number) => {
    var sum  = 0
    sum = num1 + num2
    return sum
}


 function myFim(num1:number,num2:number){
    return num1 + num2
}

console.log("myFim",myFim(2,3));
var num1=1225.30732323
var val= num1.toFixed(2);
 console.log(val)