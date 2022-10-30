class Dog {
    constructor(name){
        this.name = name;
    }

    bark() {
        console.log("Woof!")
    }
}

const dog1 = new Dog("Daisy");
const dog2 = new Dog("Max");
const dog3 = new Dog("Spot");

Dog.prototype.play = () => console.log("Playing now!");

dog1.play();

class SuperDog extends Dog {
    constructor(name) {
        super(name)
    }

    fly() {
        console.log("Flying!");
    }
}

const dog4 = new SuperDog("Super Daisy");
dog4.bark();
dog4.fly();

const cat = {
    meow() {
        console.log("Meow!");
    }
}

const pet1 = Object.create(cat);
pet1.meow();

console.log("Direct properties on pet1: ", Object.keys(pet1));
console.log("Properties on pet1's prototype: ", Object.keys(pet1.__proto__));