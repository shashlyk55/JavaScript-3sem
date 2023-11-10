`use strict`

// task01
/*
Имеется список товаров. Реализуйте функции, которые добавляют, 
удаляют товар из списка, проверяет наличие товара. 
Определите количество имеющего товара.Используйте коллекцию Set.  
*/

let action;
let shopList = new Set();
let flag = true;
let thing;

while(flag)
{
    action = prompt("Выберите действие со списком:\n1 - добавить товар\n2 - удалить товар\n\
3 - проверить наличие товара\n4 - выход из программы\n", "");
    switch(action)
    {
        case "1":
        {
            thing = prompt("Введите название товара, который хотите добавить: ", "");

            if(Add(thing, shopList)) alert(`Текущий список: " ${ShowList(shopList)}\nКоличество товаров: ${shopList.size}`);
            break;
        }
        case "2": 
        {
            thing = prompt("Введите название товара, который хотите удалить: ", "");
            
            if(Delete(thing, shopList)) alert(`Текущий список: " ${ShowList(shopList)}\nКоличество товаров: ${shopList.size}`);
            break;
        }
        case "3":
        {
            thing = prompt("Введите название товара, который хотите найти: ", "");
            
            //alert(Check(thing, shopList) ? "Товар найден" : "Товар отсутствует в списке");
            alert((shopList.has(thing)) ? "Товар найден" : "Товар отсутствует в списке");
            break;
        }
        case "4":
        {
            flag = false;
            alert("Вы вышли из программы!");
            break;
        }
        default:
            alert("Выбран неверный пункт! Повторите ввод!\n");
    }
}

function ShowList(list){
    let arr = [];
    for(let thing of list){
        arr.push(thing);
    }
    return arr;
}

function Add(item, list){
    if(item == ""){
        alert("Некорректное название товара")
        return false;
    }
    if(list.has(item.toLowerCase())){
        alert("Такой товар уже есть в списке! Товар не был добавлен");
        return false;
    }
    list.add(item.toLowerCase());
    return true;
}

function Delete(item, list){
    if(list.delete(item)){
        alert("Товар успешно удален!");
        return true;
    }
    else{
        alert("Не удалось удалить товар!");
        return false;
    }
}