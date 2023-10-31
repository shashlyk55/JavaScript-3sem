`use strict`

// task4
/*
Вам дана строка, состоящая из символов ASCII. 
Переведите символы в код - число total1, замените все цифры 7 на 1 - число total2. 
И вычтите из total1 число total2.

Пример:  'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

total1 = 656667, total2 = 656661

*/

let str;
str = prompt("Введите строку: ", "");

function StringToCode(string){
    let total1 = "";
    let total2 = "";
    let arr = [];

    for(let i = 0; i < string.length; i++){
        total1 += string.charCodeAt(i);
    }

    for(let i = 0; i < total1.length; i++){
        if(total1[i] === '7'){
            total2 += '1';
            continue;
        }
        total2 += total1[i];
    }

    let result = +total1 - +total2;
    return result;
}

alert(StringToCode(str));