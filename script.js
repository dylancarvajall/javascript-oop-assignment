// Write a Car class in Javascript that takes the following properties as parameters and sets them in a constructor:
// 1. Make
// 2. Model
// 3. Year
// 4. Color
// Finally, make sure to add 4 methods (getMake, getModel, getYear, and getColor) that return the car's respective properties
// (This is called a 'getter' in Object Oriented Programming)

// If you're stuck, take a look at the example class here for reference: https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/#

//Step 1: Define Car Class
class Car {
    //Make the constructor: initiate the car properties
    constructor(make, model, year, color) {
        this.make = make;
        this.model= model;
        this.year = year;
        this.color = color;
    }
//Step 2: Make getter methods: 
    getMake() { //retrieves make property
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    getColor() {
        return this.color;
    }
}

//Example usage of the Car Class
const myCar = new Car("Rolls Royce", "Ghost", "2022", "Black");

//Accessing properties using getter methods
console.log("Make:", myCar.getMake());
console.log("Model:", myCar.getModel());
console.log("Year:", myCar.getYear());
console.log("Color:", myCar.getColor());
