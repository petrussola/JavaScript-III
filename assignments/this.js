/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding - this refers to 'Window' object, meaning everything in JS. This happens when we create something on the global scope - 'this' refers to the window.
* 2. Implicit binding - 'this' called in a method refers to the object to the left of the dot in the dot notation.
* 3. New keyword binding - when using a constructor to instantiate objects, 'this' refers to the object being created.
* 4. Explicit binding - 'this' is explicitely defined and refers to whatever we are passing
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function speak () {
    return this;
}

// Principle 2

// code example for Implicit Binding

var car = {
    brand: 'Toyota',
    model: 'Corolla',
    goes: function () {
        return `The ${this.brand} ${this.model} goes!`
    },
}



// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding