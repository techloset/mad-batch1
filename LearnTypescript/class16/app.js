// var objName:ICar = {}
var Car = /** @class */ (function () {
    function Car(abc) {
        this.engine = abc;
    }
    Car.prototype.changeEngine = function (newValue) {
        this.engine = newValue;
    };
    Car.prototype.doStart = function () {
        // lines of code
        console.log("doStart", this.engine);
    };
    Car.prototype.doStop = function () {
        // lines of code
        console.log("doStop", this.engine);
    };
    return Car;
}());
//create an object
// var obj1:ICar = {}
var obj2 = new Car("1000");
obj2.doStart();
obj2.changeEngine("something new");
obj2.doStart();
var obj3 = new Car("1400");
obj3.changeEngine("2000");
obj3.doStart();
var obj = new Car("600");
obj.doStart();
//  anyFunc()
console.log();
console.error();
var ownObj1 = {
    engine: "1300"
};
var ownObj2 = {
    sadfsdaf: "1300"
};
var ownObj3 = {
    sadf: "1300"
};
