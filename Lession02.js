var a = 5, b = 7;
function multiplication(a, b) {
    return a * b;
}
let result = multiplication(a, b);
console.log(a + "*" + b + " = " + result);

var addition = function (a, b) {
    return a + b;
}
console.log(a + "+" + b + "=" + addition(a, b));
var calculator = {
    a: 7,
    b: 9,
    subtraction: function (a, b) {
        return a - b;
    }
};
console.log(a + "-" + b + "=" + calculator.subtraction(a, b));

(function () {
    console.log(a + "/" + b + "=" + a / b);
})();

//ES6 javascript 2015

var division = (a, b) => {
    return a / b;
}
console.log(a + "-" + b + "=" + division(a, b));

var sayHello = message => console.log(message);

sayHello("Hello Duong");

console.log(`${a} / ${b} = ${division(a, b)}`);
console.log(`${a} + ${b} = ${addition(a, b)}`);


//Use Template Literals in ES6
var salutation = "Hello";
var place = "Planet"
//var greeting = salutation + " ,world";
var greeting = `${salutation},
You
    Crazy  ${place}   World
    How 
    Are
        you

world`;


console.log(greeting);