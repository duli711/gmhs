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

// Napiš funkci printRange, která vypíše do 
// konzole všechna čísla od parametru start až po end
// postup:
// 1) Deklarace funkce
// 2) Definování parametrů
// 3) for smyčka
// 4) Vyvolání funkce a argumentů


function printRange(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}

printRange(3, 7);
printRange(10, 15);


let pozdrav = "Zdravím"; // Global Scope


function sayHello() { // Deklarace funkce
    let pozdravFunkce = "Pozdrav z funkce"
    console.log(pozdravFunkce)
}

if(true) {
    let zprava = "Toto je bloková zpráva"
    console.log(zprava)
}


sayHello(); // Volání funkce

function pozdrav2(name) {
    console.log("Zdravím " + name);
}

pozdrav2("Honza")

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


// Deklarace funkce
// Cyklus for let i = (parametr); i <= (parametr); i++;
// console.log(i)

function printRange(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}


// Volání funkce
printRange(1,4)



function multiply(a,b) {
    let result = a * b;
    return result;
}

result = multiply(5,10)
console.log(result)

console.log(multiply(5,10))

function test() {
    return "Hotovo";
    console.log("Tady by byl nějaký text")
}

console.log(test());

function vek(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(vek(21))

console.log(9 % 2)

// Deklarace funkce
// Vrací true pokud je sudé, vrací false pokud je liché
// 

function sudeLiche(cislo) {
    return cislo % 2 === 0;
}

console.log(sudeLiche(10)); // true
console.log(sudeLiche(5)); // false