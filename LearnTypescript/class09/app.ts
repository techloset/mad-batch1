// concat
var userNumbers = [10,20,30,40,50]
var userNumbers2 = [60,70,80,90,100]

var concatArr = userNumbers.concat(userNumbers2)
console.log("concatArr", concatArr);


var userNames:string[] = ["naveed","ali"]
var userNames2:string[] = ["umar","zain"]

var concatArrString:string[] = userNames.concat(userNames2)
console.log("concatArr", concatArrString);

function simpleMethod(element:number, index:number) {
    console.log("simpleMethod logs", element,index);
    return element + 1
}
// var anyName = (element:number, index:number) => element
var numbers:number[] = [10,20,30,40,50]
var newNumbers:number[] = []
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    newNumbers.push(element * 2)
}
console.log("newNumbers",newNumbers);


var newArr = numbers.map(simpleMethod)
console.log("newArr return by map method", newArr);

// concatArr.filter(simpleMethod)
// concatArr.forEach(simpleMethod)
// concatArrString.every(simpleMethod)

// var requiredArr = [...userNames]
for (let index = 0; index < userNames2.length; index++) {
    const element = userNames2[index];
    // requiredArr.push(element)
}
// console.log("own array result",requiredArr);
