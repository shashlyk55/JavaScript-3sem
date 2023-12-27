`use strict`

// task 02

/*
Объект user имеет свойства name, age. 
Создайте объект admin, у которого есть свойства admin и 
все свойства объекта user. Используйте spread оператор.
*/

let user = {
    name: "Bob",
    age: 22,
}

console.log(user)

let admin = {
    place: "Moscow",
    ...user,
    time: "12:34"
}

console.log(admin)