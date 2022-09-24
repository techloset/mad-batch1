var studentsScores: number[] = [50, 20, 30, 40, 10];
// var students = [{
//     name :'naveed',
//     age:25,

// },{
//     name :'umar',
//     age:12,

// // } ]

// // students[0].name =
// var sum = 0
// for (let index = 0; index < studentsScores.length; index++) {
//   const element = studentsScores[index];
//   sum = sum + element
//   // console.log("element in for", element);
// }

// studentsScores.forEach((element) => {
//   // console.log("element in for each", element);
// });

// var mapLoopArr: number[] = studentsScores.map((item) => {
//   // console.log("item", item);
//   if (item > 20) {
//     return item * 2;
//   }
//   return item;
// });
// console.log("mapLoopArr", mapLoopArr);

// var filterLoopArr = studentsScores.filter((item) => {
//   // console.log("item", item);
//   if (item > 20) {
//     return item * 2;
//   }
// });
// console.log("filterLoopArr", filterLoopArr);

// var reverseArr = studentsScores.reverse();
// var sortedScores: number[] = studentsScores.sort((a, b) => a - b);

// console.log("sortedScores", sortedScores);



var total = studentsScores.reduce(function (a, b) {
    console.log("a=>",a, "b=>",b);

  return a + b;
});
console.log("total is : " + total);
var studentNames: string [] = ["naveed", "umar", "ali"]

console.log(studentNames.join(','));

