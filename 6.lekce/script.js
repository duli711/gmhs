let number = 10;
let message;

if (number > 0) {
    message = "kladné číslo";
} else {
    message = "není kladné";
}

console.log(message)

// řešení pomocí ternárního operátoru

let number2 = 10;
let message2 = (number2 > 0) ? "kladné číslo" : "není kladné";

console.log(message2)

let age = 20;
if(age >= 18) {
    console.log("můžeš řídit")
} else {
    console.log ("jsi moc mladý/á na řízení")
}

age = 17;
console.log(age >= 18 ? "můžeš řídit" : "nemůžeš")

let podminka = !false;

podminka = true && false;

podminka = false || true;

console.log(podminka);