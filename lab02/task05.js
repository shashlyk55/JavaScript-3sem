`use strict`

// task5
/*
Напишите функцию, которая принимает целое число n и строку s в качестве параметров и 
    возвращает строку s, повторяющуюся ровно n раз.
*/

let str = prompt("Введите строку ", "")
let count = prompt("Введите количество повторений строки", 1)

function repeat(s, n){
    let string = ""
    for(let i = 0; i < n; i++){
        string += s;
    }
    return string;
}

alert(repeat(str, count))