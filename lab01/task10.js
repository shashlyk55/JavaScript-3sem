`use strict`

// task10
/* Реализуйте функцию с тремя параметрами. Первый параметр по умолчанию. 
    Третий параметр вводит пользователь. 
    Функция возвращает строку из трех параметров.*/


function func(greeting, input,name = "noname"){
    input = prompt("введите строку", "");
    return `${greeting}, ${name} ${input}`;
}

let str = "Hi"
alert(func("John", str));