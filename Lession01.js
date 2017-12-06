var name = "Bui";
var age = 18;
var address = "Nghe An";
console.log("My name: " + name);
console.log("I'm " + age + "years old");
console.log("I come from " + address);
console.log("I'm beginning learn javascript");
function sayHello(name, message) {
    const myName= "Bui";
    if(name===myName) {
        let local = "Nice to meet you";
        local += "!";
        console.log(message + " " + name);
        console.log(local);
    }
}
sayHello("Bui","Hello");
console.log("End Program");
