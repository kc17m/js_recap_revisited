// Lev1_14

console.log(Boolean(100));
console.log(Boolean(3.14));
console.log(Boolean(-15));
console.log(Boolean("hello"));
console.log(Boolean("false"));
console.log(Boolean(1 + 7 + 3.14));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(false));


// lev1_15

let num = 5;
let anotherNum = 8;

console.log(num == anotherNum);
console.log(num > anotherNum);
console.log(num < anotherNum);
console.log(num >= anotherNum);
console.log(num <= anotherNum);
console.log(num == "5");
console.log(num != 8);
console.log(num != "5");

// Lev1_4 data types

let variable01 = "John"; //string
let variable02 = 3.14; // number
let variable03 = NaN; // number
let variable04 = false; // boolean
let variable05 = [1, 2, 3, 4]; // object
let variable06 = { name: "John", age: 34 }; //object
let variable07 = new Date(); //date?? - nein Object!!
let variable08 = function () { }; //function
let variable09 = null; //object
let variable10 = ""; //string
let variable11 = 3 - 2 == 5; //boolean !!
let variable12 = 3 + "3"; //string
console.log(typeof variable12);

// lev1_8 arithmetic operators
// 01

let x = 20, y = 30;
console.log(x + y);
console.log(y - x);
console.log(x * y);
console.log(x / y);

let z = 10;
let resultOne = x * y / z;
console.log(resultOne);

// 02

let a = 15, b = 9;

console.log(15 % 9);

let c = 20;

let resultTwo = (a + b) * c;
console.log(resultTwo);

a++;
console.log(a);

b--;
console.log(b);

console.log(resultOne % resultTwo);

// lev2_1 DOM Elements

let home = document.getElementById("home-li");
console.log(home);
let navNews = document.getElementById("navNews");
let navContact = document.getElementById("navContact");
let navChange = document.getElementById("navChange")

function changeMe() {
    console.log("test");
    home.classList.toggle("pink");
}

// lev2_2 DOM Elements

let vorname = document.getElementById("vorname");
let nachname = document.getElementById("nachname");
let land = document.getElementById("land");

function getDetails() {
    console.log(vorname.value + nachname.value + land.value);
}


// lev2_10 add / remove classlist 
// Schreibe drei Funktionen, die beim Anklicken des Buttons den Style ändern.
// Der HTML und CSS Code befindet sich im Kommentar.
// Nutze
// classList
// transition-property
// transition-duration
// box-shadow

let element = document.getElementById("element");

function mySmall() {
    element.classList.add("small");
    element.classList.remove("middle");
    element.classList.remove("big");
}

function myMiddle() {
    element.classList.add("middle");
    element.classList.remove("small");
    element.classList.remove("big");
}

function myBig() {
    element.classList.add("big");
    element.classList.remove("small");
    element.classList.remove("middle");
}

// lev2_11

let box = document.getElementById("box");

function randomBackgroundColor() {

    let randomValue1 = Math.floor(Math.random() * 200);
    let randomValue2 = Math.floor(Math.random() * 200);
    let randomValue3 = Math.floor(Math.random() * 200);

    console.log(randomValue1);

    let randomBg = "rgb(" + randomValue1 + (",") + randomValue2 + "," + randomValue3 + ")";
    console.log(randomBg);
    return randomBg;
}

function changeBg() {
    box.style.background = randomBackgroundColor();
}


















