// concat
var userNumbers = [10, 20, 30, 40, 50];
var userNumbers2 = [60, 70, 80, 90, 100];
var concatArr = userNumbers.concat(userNumbers2);
console.log("concatArr", concatArr);
var userNames = ["naveed", "ali"];
var userNames2 = ["umar", "zain"];
var concatArrString = userNames.concat(userNames2);
console.log("concatArr", concatArrString);
function simpleMethod(element, index) {
    console.log("simpleMethod logs", element, index);
    return element + 1;
}
// var anyName = (element:number, index:number) => element
var numbers = [10, 20, 30, 40, 50];
var newNumbers = [];
for (var index = 0; index < numbers.length; index++) {
    var element = numbers[index];
    newNumbers.push(element * 2);
}
console.log("newNumbers", newNumbers);
var newArr = numbers.map(simpleMethod);
console.log("newArr return by map method", newArr);
// concatArr.filter(simpleMethod)
// concatArr.forEach(simpleMethod)
// concatArrString.every(simpleMethod)
// var requiredArr = [...userNames]
for (var index = 0; index < userNames2.length; index++) {
    var element = userNames2[index];
    // requiredArr.push(element)
}
// console.log("own array result",requiredArr);
