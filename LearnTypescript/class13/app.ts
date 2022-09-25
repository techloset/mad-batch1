var personName:string = "naveed"
var personDOB:number = 22


var personArr:string [] = ["naveed","ali"]
type educationHistoryType = {
  inter: boolean,
  master: boolean
} 

type studentType = {
  firstName?: string,
  lastName: string,
  rollNo: number,
  dob: number,
  educationHistory: educationHistoryType
}

var student: studentType = {
  // firstName : "Naveed",
  // lastName: "asdf",
  rollNo: 232,
  dob: 22,
  educationHistory:{
    inter:true,
    master:false
  }
}

var someARr: studentType [] = [{}]
// data read
// students[0]
// student.rollNo
// data update
// students[0] = "naveed"
// student.lastName = "new name"
// student.cnic = 20234234
// how to create new key, 
// students.push("sdaf")
// student["cnic"] = 2342342302

// delete student.gender
// console.log("first student roll no:", student.educationHistory);
// student.something.newKey
// if(student.something){

// }
// console.log("first student roll no:",);

// var student1 = {
//   name : "ali",
//   rollNo: 232,
//   age:25,
//   gender: "male",
//   class:"web and mobile",
//   batch: 5,
//   subjects: ["urdu","math","english"],
//   educationHistory:{
//     inter:true,
//     master:false
//   }
// }

// var student2 = {
//   name : "ali",
//   rollNo: 232,
//   age:25,
//   gender: "male",
//   class:"web and mobile",
//   batch: 5,
//   subjects: ["urdu","math","english"],
//   educationHistory:{
//     inter:true,
//     master:false
//   }
// }

// var student3 = {
//   name : "ali",
//   rollNo: 232,
//   age:25,
//   gender: "male",
//   class:"web and mobile",
//   batch: 5,
//   subjects: ["urdu","math","english"],
//   educationHistory:{
//     inter:true,
//     master:false
//   }
// }

var students = [{
  name : "ali",
  rollNo: 232,
  age:25,
  gender: "male",
  class:"web and mobile",
  batch: 5,
  subjects: ["urdu","math","english"],
  educationHistory:{
    inter:true,
    master:false
  }
},
{
  name : "zain",
  rollNo: 2341,
  age:25,
  gender: "male",
  class:"web and mobile",
  batch: 5,
  subjects: ["urdu","math","english"],
  educationHistory:{
    inter:true,
    master:false
  }
}
]
// var someArr = [{},[],"",23,null, undefined, false]


// for (let index = 0; index < students.length; index++) {
//   const student = students[index];
//   console.log("student Name", student.name);
//   console.log("student Roll", student.rollNo);

// }

// students.forEach((student)=>{
// console.log("in for each", student.name);

// })