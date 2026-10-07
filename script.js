// Sum
function sum(a, b) {
    return a + b;
}

// Multiplication
function product(a, b) {
    return a * b;
}

// Modulus
function mod(a, b) {
    return a % b;
}

// Division
function divide(a, b) {
    return a / b;
}

// Greetings
function greeting(name) {
    return ("Hello " + name);
}

document.getElementById("demo1").innerHTML = (product(3, 8));
document.getElementById("demo2").innerHTML = (sum(100, 100));
document.getElementById("demo3").innerHTML = (mod(9, 8));
document.getElementById("demo4").innerHTML = (divide(30, 3));
document.getElementById("demo5").innerHTML = (greeting("John"));




// Ways of defining a Function
// Function Declaration
function sum(a, b) {
    return a + b;
}

function difference(a, b) {
    return a - b;
}

// Function Expressions:

// - Named Functions
const Function_a = function sayHello(name) {
    return "Hello " + name + ". I hope this finds you well.";
};
const Function_b = function sayGoodbye(name) {
    return "Goodbye " + name + ". Please do have a blessed day.";
};

// - Anonymous Functions
const Function_a_1 = function (name) {
    return "Welcome to my website, " + name;
};
const Function_b_1 = function (name, age) {
    return "Hello " + name + ". You are " + age + " years old.";
};

// Arrow Functions
const product = (a, b) => a * b;
const modulus = (a, b) => a % b;

// Function Constructors
const Mean = new Function("x", "y", "(x + y)/2");
const Division = new Function("x", "y", "x/y");

// Object Method
const obj_1 = {
    myFunction(x, y) {
        return "There are " + x + " keyboards and " + y + " amounts of mouses up for sale.";
    },
};
const obj_2 = {
    myFunction(x, y) {
        return x + y;
    },
};