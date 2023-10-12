`use strict`

// task 5
/* Пользователь вводит имя в диалоговое окно. Если имя совпало с именем преподавателя, 
    то выведите сообщение о том, что введенные пользователем данные верные. 
    Учтите, что пользователь может ввести только имя или имя и отчество, или полностью ФИО. 
    Кроме того, данные могут быть введены в верхнем регистре. */

let teacherName = "Кудлацкая Марина Федоровна";
let inputString = prompt("Введите имя преподавателя: ", "");


function searchSubstring(subString, string){
    if(string.includes(subString))
        return "Преподаватель найден"
    else 
        return "Результаты поиска отсутствуют"
}
alert(searchSubstring(inputString.toUpperCase(), teacherName.toUpperCase()));кудлацкая



