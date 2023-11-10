`use strict`

// task02
/*
Используя коллекцию Set создайте список студентов. 
О каждом студенте содержится информация: номер зачетки, группа, ФИО. 
Создайте функции, которые:
- добавляют студента, 
- удаляют по номеру, 
- фильтруют список по группе, 
- сортируют по номеру зачетки. 
*/

let student;
let studentList = new Set();
let flag = true;

let action;
let recordBook;
let group;
let name;
let number;


while(flag)
{
    action = prompt("Выберите действие со списком:\n1 - добавить студент\n2 - удалить студента по номеру зачетки\n\
3 - фильтровать список по группе\n4 - сортировать список по номеру зачеток\n5 - выход из программы\n", "");
    switch(action)
    {
        case "1":
        {
            student = new Object();
            student.recordBook = prompt("Номер зачетки студента: ", "");
            student.group = prompt("Номер группы: ", "");
            student.fullName = prompt("ФИО студента: ", "");

            if(AddObj(student, studentList)){
                alert(ShowList(studentList));
                break;
            }
            break;
        }
        case "2":
        {
            number = prompt("Номер зачетки студента, которого хотите удалить: ", "");
            alert(DeleteObj(number, studentList) ? "Студент удален!" : "Студент с такоим номером зачетки не найден!");
            alert(ShowList(studentList));
            break;
        }
        case "3":
        {
            number = prompt("Номер группы: ", "");
            alert(FilteringList(studentList, number));
            break;
        }
        case "4":
        {
            let studentArray = Array.from(studentList);
            let sortedList = new Set(studentArray);
            
            studentArray.sort(function(a, b){
                return a.recordBook - b.recordBook;
            })
            alert(ShowList(sortedList));
            break;
        }
        case "5":
            {
                alert("Вы вышли из программы!");
            flag = false;
            break;
        }
        default:
        {
            alert("Введено неверное действие! Повторите попытку!");
        }
    }
}

function AddObj(object, list){
    if(object.fullName == "" || object.group == "" || object.recordBook == ""){
        alert("Ошибка ввода данных!");
        return false;
    }
    student.fullName = student.fullName.toLowerCase();
    if(SearchRecordBook(list, object.recordBook) || SearchFullName(list, object.fullName.toLowerCase())){
        alert("Такой студент уже есть в списке");
        return false;
    }
    alert("Студент добавлен!");
    studentList.add(student);
    return true;
}

function DeleteObj(number, list){
    return list.delete(SearchElement(list, number));
}

function FilteringList(list, number){
    let filteredList = `Список студентов группы № ${number}:\n`
        for(let item of list){
            if(item.group === number){
                filteredList += `${item.fullName}   ${item.group}   ${item.recordBook}\n`;
            }
        }   
    return filteredList;
}

function SearchRecordBook(list, fieldVal){
    for(let item of list){
        if(item.recordBook === fieldVal)
            return true;
        return false;
    }
}

function SearchFullName(list, fieldVal){
    for(let item of list){
        if(item.fullName === fieldVal)
            return true;
        return false;
    }
}

function SearchElement(list, fieldVal){
    for(let item of list){
        if(item.recordBook == fieldVal)
            return item;
    }
}

function ShowList(list){
    let str = "Текущий список:\n";
    for(let item of list){
        str += `${item.fullName}   ${item.group}   ${item.recordBook}\n`;
    }
    return str;
}
