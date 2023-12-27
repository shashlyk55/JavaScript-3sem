`use strict`


let user = {
    name: 'Masha',
    age: 21
};
let numbers = [1, 2, 3];
let user1 = {
    name: 'Masha',
    age: 23,
    location:{
        city: 'Minsk',
        country: 'Belarus'
    }
};
let user2 = {
    name: 'Masha',
    age: 28,
    skills: ['HTML', 'CSS', 'JavaScript', 'React']
};
const array = [
    {id: 1, name: 'Vasya', group: 10},
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11},
]
let user4 = {
    name: 'Masha',
    age: 19,
    studies:{
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        exams:{
            maths: true,
            programming: false
        }
    }
};
let user5 = {
    name: 'Masha',
    age: 22,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10
        },
        exams:[
            {maths: true, mark: 8},
            {programming: false, mark: 4}
        ]
    }
};
let user6 = {
    name: 'Masha',
    age: 21,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10
        },
        exams: [
            {
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Ivanov',
                    degree: 'PhD'
                }
            },
            {
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Petrov',
                    degree: 'PhD'
                }
            },
        ]
    }
};
let user7 = {
    name: 'Masha',
    age: 20,
    studies: {
        university: 'BSTU',
        speciality: 'designer',
        year: 2020,
        department: {
            faculty: 'FIT',
            group: 10
        },
        exams: [
            {
                maths: true,
                mark: 8,
                professor: {
                    name: 'Ivan Petrov',
                    degree: 'PhD',
                    articles: [
                        {title: 'About HTML', pagesNumber: 3},
                        {title: 'About CSS', pagesNumber: 5},
                        {title: 'About JavaScript', pagesNumber: 1}
                    ]
                }
            },
            {
                programming: true,
                mark: 10,
                professor: {
                    name: 'Petr Ivanov',
                    degree: 'PhD',
                    articles: [
                        {title: 'About HTML', pagesNumber: 3},
                        {title: 'About CSS', pagesNumber: 5},
                        {title: 'About JavaScript', pagesNumber: 1}
                    ]
                }
            },
        ]
    }

};
let store = {
    state: {        // 1 уровень
        profilePage: {  // 2 уровень
            posts: [    // 3 уровень
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1},
            ],
            newPostText: 'About me',
        },
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
        sidebar: []
    }
}

// task 01
/*
Выполнить глубокое копирование всех объектов и массивов. 
Использовать spread оператор. 
*/
const copyUser = {...user}
const copyNumbers = {...numbers}

const copyUser1 = {...user1}
console.log(user1.location.city)
copyUser1.location.city = 'Brest'
console.log(user1.location.city)
console.log(copyUser1.location.city)

const copyUser2 = {...user2}
const copyArray = {...array}
const copyUser4 = {...user4}
const copyUser5 = {...user5}
const copyUser6 = {...user6}
const copyUser7 = {...user7}
const copyStore = {...store}

// task 02
/*
Обратитесь к копии объекта user5 и измените значение свойства group на 12, 
а оценку по программированию измените на 10.
*/
copyUser5.studies = {...user5.studies}
copyUser5.studies.department = {...user5.studies.department}
copyUser5.studies.department.group = 12

console.log(user5.studies.department.group)
console.log(copyUser5.studies.department.group)

copyUser5.studies.exams = [...user5.studies.exams]
copyUser5.studies.exams[0] = {...user5.studies.exams[0]}
copyUser5.studies.exams[1] = {...user5.studies.exams[1]}
copyUser5.studies.exams[1].mark = 10

console.log(user5.studies.exams[1])
console.log(copyUser5.studies.exams[1])
// task 03
/*
Обратитесь к копии объекта user6 и измените имя преподавателя.
*/

copyUser6.studies = {...user6.studies}
copyUser6.studies.exams = [...user6.studies.exams]
copyUser6.studies.exams[0] = {...user6.studies.exams[0]}
copyUser6.studies.exams[1] = {...user6.studies.exams[1]}
copyUser6.studies.exams[0].professor = {...user6.studies.exams[0].professor}
copyUser6.studies.exams[1].professor = {...user6.studies.exams[1].professor}
copyUser6.studies.exams[0].professor.name = 'Max maximovich'
copyUser6.studies.exams[1].professor.name = 'Paul Paulovich'

console.log(user6.studies.exams[0].professor.name)
console.log(user6.studies.exams[1].professor.name)

console.log(copyUser6.studies.exams[0].professor.name)
console.log(copyUser6.studies.exams[1].professor.name)

// task 04
/*
Обратитесь к копии объекта user7 и измените количество страниц на 3 для статьи “About CSS” преподавателя Petr Ivanov.
*/

copyUser7.studies = {...user7.studies}
copyUser7.studies.exams = [...user7.studies.exams]
copyUser7.studies.exams[0] = {...user7.studies.exams[0]}
copyUser7.studies.exams[1] = {...user7.studies.exams[1]}
copyUser7.studies.exams[2] = {...user7.studies.exams[2]}

copyUser7.studies.exams[1].professor = {...user7.studies.exams[1].professor}
copyUser7.studies.exams[1].professor.articles = [...user7.studies.exams[1].professor.articles]
copyUser7.studies.exams[1].professor.articles[1] = {...user7.studies.exams[1].professor.articles[1]}
copyUser7.studies.exams[1].professor.articles[1].pagesNumber = 3

console.log(user7.studies.exams[1].professor.articles[1])
console.log(copyUser7.studies.exams[1].professor.articles[1])

// task 05
// Замените все сообщения в объекте store на “Hello”.
copyStore.state = {...store.state}
copyStore.state.dialogsPage = {...store.state.dialogsPage}
copyStore.state.dialogsPage.messages = [...store.state.dialogsPage.messages]
copyStore.state.dialogsPage.messages[0] = {...store.state.dialogsPage.messages[0]}
copyStore.state.dialogsPage.messages[1] = {...store.state.dialogsPage.messages[1]}
copyStore.state.dialogsPage.messages[2] = {...store.state.dialogsPage.messages[2]}

copyStore.state.dialogsPage.messages[0].message = 'Hello'
copyStore.state.dialogsPage.messages[1].message = 'Hello'
copyStore.state.dialogsPage.messages[2].message = 'Hello'

console.log(store.state.dialogsPage.messages)
console.log(copyStore.state.dialogsPage.messages)
