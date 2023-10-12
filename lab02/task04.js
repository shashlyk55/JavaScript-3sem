`use strict`

// task4
/* 
Реализовать функцию, которая получает строку str, переворачивает ее и 
    возвращает строку, состоящую только из символов английского алфавита.

Пример:
str = "JavaScript" вывод должен быть "tpircSavaJ".
str = "JavaScr53э? ipt" вывод должен быть " tpircSavaJ ".
*/

let str = prompt("Введите строку ","")

function f(string){
    let newString = "";
    for(let i = 0; i < string.length; i++){
        if((string[i] < 'z') && (string[i] > 'A')){
            newString += string[i];
        }
    }
     
    string = "";
    
    for(let i = newString.length - 1; i >= 0; i--){
        string += newString[i];
    }
    return string;
}

alert(f(str))