// var myTuple = [1,"naveed"]
// var a = myTuple[0]
// var b = myTuple[1]
// var [a,b] = myTuple
// var laptop = {
//   color: 'black',
//   screenSizeInch: 15.6,
// }

// var myColor = laptop.color
// var {color, screenSizeInch} = laptop
// console.log("color", color);


// var myVar: number | string[] | boolean | string = "s"


// function print(params:number | string) {
  
// }


type IPerson = {
  firstName: string,
  lastName?: string,
}

interface BPerson {
  firstName: string,
  lastName: string,
  age: number,
}
  

var myData:IPerson = {firstName:'sdf'}


var myArr:string[] = ["sadf"]

interface MYINTERFACE {
[index:number] : IPerson
}

var myArr2:MYINTERFACE = []


interface A {
  firstName: string,
}

interface B  extends A{
  lastName: string
}

var newObj: B = {lastName:'sa', firstName:'s'}




interface ITyre {
  size: number,
  companyName:string ,
}

interface ICar extends ITyre{
  modal:string,
  color:string,
  engineType: number,
  
}


var newTyre:ITyre = {}

var newCar:ICar = {}