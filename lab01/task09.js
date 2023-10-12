`use strict`

// task9
/* По номеру дня недели определить какой это день: 1 – пн, 2 – вт, … , 7 – вс. 
    Номер дня вводит пользователь. Реализовать через объект и через массив.*/

let week = {
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday",
    7:"Sunday",
    8:"День не выбран"
}

let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday","День не выбран"]
let userChoice = prompt("Выберите день недели",8)
alert(week[userChoice] + ("(массив)"));
alert(week[userChoice] + ("(объект)"));