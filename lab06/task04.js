`use strict`

// task 04
/*
В массиве tasks хранится список задач. 
Создать новую задачу task и добавить ее в массив, 
используя spread оператор.
*/

let tasks = [
    { id: 1, title: "HTML&CSS", isDone: true},
    { id: 2, title: "JS", isDone: true},
    { id: 3, title: "ReactJS", isDone: false},
    { id: 4, title: "Rest API", isDone: false},
    { id: 5, title: "GraphQL", isDone: false},
];

console.log(tasks);

tasks = [...tasks, { id: 6, title: "NodeJS", isDone: true}];

console.log(tasks);