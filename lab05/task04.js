`use strict`

/*
Какие переменные и функции сохраняются в глобальный объект window? 
Получите значения всех созданных переменных и функции, 
которые хранятся в глобальном объекте window. 
Переопределите переменные через глобальный объект.
*/

function f(){
    console.log("функция")
}
var b = 9;
a = 5

window.a = "qwerty"

window.func = function(){
    console.log("новая функция")
}
for (const key in window) {
    if (window.hasOwnProperty(key)) {
      console.log(key, window[key]);
    }
  }


