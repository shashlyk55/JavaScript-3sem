`use strict`

// task 03

/*
Выполнить деструктуризацию объекта store до 3 уровня вложенности. 
После этого вывести значения likesCount из массива posts. 
Выполнить фильтрацию массива dialogs – выбрать пользователей с четными id.   
В массиве messages заменить все сообщения на “Hello user” (использовать метод map).
*/

let store = {
    state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1},
            ],
            dialogsPage: {
                dialogs: [
                    {id: 1, name: 'Valera'},
                    {id: 2, name: 'Andrey'},
                    {id: 3, name: 'Sasha'},
                    {id: 4, name: 'Viktor'},
                ],
                messages: [
                    {id: 1, message: 'hi'},
                    {id: 2, message: 'hi hi'},
                    {id: 3, message: 'hi hi hi'},
                ],
            },
        },
        sidebar: [],
    },
}
// деструктуризация 3 уроыней
let {state: {profilePage: {posts, dialogsPage}}} = store
let {state: {profilePage}} = store
let {state} = store

console.log(posts)
console.log(profilePage)
console.log(state)

let {state: {profilePage: {dialogsPage: {dialogs}}}} = store

console.log(dialogs)

// вывод значений likesCount
for(let post of posts)
    console.log(post.likesCount)

// фильтрация массива dialogs
let oddId = dialogs.filter(function(dialog){
    return dialog.id % 2 === 0;
});
console.log(oddId)

// звмена всез сообщений в messages на Hello user
let {state: {profilePage: {dialogsPage: {messages}}}} = store

messages.map(function(mes){ mes.message = "Hello user" });

console.log(messages)


