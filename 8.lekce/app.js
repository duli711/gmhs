function ahoj() {
    console.log("Ahoj");
    console.log("Ahoj");
}

ahoj();

let greeting = "Nazdárek";

function showGreeting() {
    console.log(greeting);
}

showGreeting();

function funkceUvnitr() {
    let cislo = 123;
    console.log(cislo);
}

funkceUvnitr(); 

// Parametr a Argument

function test(name) {
    console.log("Ahoj " + name);
}

test("Tomáš")
test("Ema")
test(123)

function scitani(num1, num2) {
    console.log(num1 + num2)
}

scitani(4,6)

function odcitani(num1, num2) {
    console.log(num1 - num2)
}

odcitani(4,6)

function nasobeni(num1, num2) {
    console.log(num1 * num2)
}

nasobeni(4,6)

function deleni(num1, num2) {
    console.log(num1 / num2)
}

deleni(4,6)