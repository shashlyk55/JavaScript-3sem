`use strict`

// task3
/*
Напишите функцию, которая на вход принимает массив из студентов, 
где студент — это объект с полями «имя», «возраст» и «номер группы» {name: string, age: number, groupId: number}, 
а на выходе возвращает объект, где ключ — это номер группы, 
а значение — массив из студентов старше 17 лет.
*/

let students = [
    {name: "John", age: 18, groupId: 2},
    {name: "Vanya", age: 18, groupId: 5},
    {name: "Patrik", age: 19, groupId: 4},
    {name: "Bob", age: 15, groupId: 1},
    {name: "Dima", age: 17, groupId: 4},
    {name: "Pavel", age: 19, groupId: 2},
    {name: "Bill", age: 22, groupId: 4},
    {name: "Carl", age: 20, groupId: 4},
    {name: "Dolik", age:26, groupId: 1},
];

function f(array) {
    let groups = {};
  
    for (let i = 0; i < array.length; i++) {
        let student = array[i];
        let groupNumber = student.groupId;
  
        //if(!groups[groupNumber]) {
        if(!Array.isArray(groups[groupNumber])){
            groups[groupNumber] = [];
        }
        if(student.age > 17){
            groups[groupNumber].push(student.name);
        }
    }
  
    return groups;
}

console.log(f(students))


