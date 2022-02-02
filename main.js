function Car(model){
    this.model = model
}

function Truck(model, hender){
    Car.call(this, model);
    this.hender = hender;
}
Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

const car1 = new Car('BMW');
const car2 = new Car('Жигули');

class Person {
    constructor (name, gender){
        this.name = name;
        this.gender = gender;
    }

    sayName(){
        console.log(this.name)
    }

    static nameValue = '232';
}

class Employee extends Person {
    constructor (name, gender, position) {
        super(name, gender);
        this.position = position;
    }

    sayPosition(){
        console.log(this.position)
    }
}