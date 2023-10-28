i. Multiple Inheritance:
// Parent class 1
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// Parent class 2
class SportsEquipment {
    constructor(sport) {
        this.sport = sport;
    }

    displaySport() {
        console.log(`I play ${this.sport}`);
    }
}

// Child class inheriting from both Person and SportsEquipment
class Athlete extends Person {
    constructor(name, sport) {
        super(name);
        this.sportEquipment = new SportsEquipment(sport);
    }

    playSport() {
        this.sportEquipment.displaySport();
    }
}

// Usage
const athlete = new Athlete('John', 'Football');
athlete.greet(); // Output: Hello, my name is John
athlete.playSport(); // Output: I play Football


Hierarchical Inheritance:
// Parent class
class Animal {
    constructor(species) {
        this.species = species;
    }

    makeSound() {
        console.log('Some sound');
    }
}

// Child classes inheriting from Animal
class Dog extends Animal {
    makeSound() {
        console.log('Bark');
    }
}

class Cat extends Animal {
    makeSound() {
        console.log('Meow');
    }
}

// Usage
const dog = new Dog('Canine');
dog.makeSound(); // Output: Bark

const cat = new Cat('Feline');
cat.makeSound(); // Output: Meow



. Hybrid Inheritance:

// Parent class
class Vehicle {
    constructor(type) {
        this.type = type;
    }

    drive() {
        console.log(`Driving the ${this.type}`);
    }
}

// Parent classes inheriting from Vehicle
class Electric extends Vehicle {
    chargeBattery() {
        console.log('Charging the battery');
    }
}

class Gasoline extends Vehicle {
    refuel() {
        console.log('Refueling the tank');
    }
}

// Child class inheriting from both Electric and Gasoline
class HybridCar extends Electric {
    constructor() {
        super('Hybrid Car');
        this.gasolineEngine = new Gasoline('Gasoline Engine');
    }

    switchPowerSource() {
        console.log('Switching power source');
    }
}

// Usage
const hybridCar = new HybridCar();
hybridCar.chargeBattery(); // Output: Charging the battery
hybridCar.refuel(); // Output: Refueling the tank
hybridCar.switchPowerSource(); // Output: Switching power source
hybridCar.drive(); // Output: Driving the Hybrid Car
