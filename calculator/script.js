let A = 10;
let B = 11;
let C = 12;
let D = 13;
let E = 14;
let F = 15;

function test(number) {
    let inp = document.getElementById("text");
    inp.value = inp.value + '${A}'
}

function test(number) {
    let inp = document.getElementById("text");
    inp.value = inp.value + '${B}'
}

function test(number) {
    let inp = document.getElementById("text");
    inp.value = inp.value + '${C}'
}

function test(number) {
    let inp = document.getElementById("text");
    inp.value = inp.value + '${D}'
}

function test(number) {
    let inp = document.getElementById("text");
    inp.value = inp.value + '${E}'
}


function test(number) {
    let inp = document.getElementById("text");
    inp.value = inp.value + '${F}'
}



function test(number) {
    let inp = document.getElementById("text");
    inp.value = inp.value + number
}

function beraberdir() {
    let inp = document.getElementById("text");
    let beraber = inp.value
    if (beraber) {
        inp.value = eval(beraber);
    }
}

function gerialma() {
    let inp = document.getElementById("text");
    let geri = inp.value
    inp.value = geri.substring(0, geri.length - 1)
}

function silmek() {
    let inp = document.getElementById("text");
    inp.value = " "
}