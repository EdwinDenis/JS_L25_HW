// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число
// Например: цифры 1, 4, 9 превратятся в число 149

let a = +prompt('Enter the first number ');
let b = +prompt('Enter the second number ');
let c = +prompt('Enter the third number ');

function Concatination(a,b,c){
    let abc = String(a) + String(b) + String(c);
    return abc;
}

alert(Concatination(a,b,c));