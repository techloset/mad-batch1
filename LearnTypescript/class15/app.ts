interface ICar {
  engine: string, 
  disp: ()=> string
}

// var objName:ICar = {}

class Car {
   engine: string
  constructor(abc: string) {
    this.engine = abc;
  }

  changeEngine(newValue: string):void{
    this.engine = newValue
  }

  doStart(): void {
    // lines of code
    console.log("doStart", this.engine);
  }

  doStop(): void {
    // lines of code
    console.log("doStop",  this.engine);
  }
}
//create an object
// var obj1:ICar = {}
var obj2 = new Car("1000");
obj2.doStart()

obj2.changeEngine("something new")

obj2.doStart()

var obj3 = new Car("1400");
obj3.changeEngine("2000")
 obj3.doStart()

 var obj = new Car("600");
 obj.doStart()

//  anyFunc()

console.log();
console.error()




var ownObj1 = {
  engine:"1300"
}

var ownObj2 = {
  sadfsdaf:"1300"
}



var ownObj3 = {
  sadf:"1300"
}

