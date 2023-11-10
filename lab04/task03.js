`use strict`

// task03
/*
Используя коллекцию Map и ее методы, реализуйте хранилище товаров. 
В корзине хранится информация о товаре: id (ключ в коллекции Map), название, количество товара, цена. 
Разработайте функции, которые:  
- добавляют товар, 
- удаляют товар из списка по id, 
- удаляют товары по названию (учтите, что названия товаров могут повторяться), 
- изменяют количество каждого товара,
- изменяют стоимость товара.
Рассчитайте количество позиций в списке и сумму стоимости всех товаров.
*/

let productStorage = new Map();

let product;
let flag = true;
let action;
let tempName;
let tempCount;
let tempCost
let key;

while(flag)
{
    action = prompt("Выберите действие со списком:\n\
1 - добавить товар\n2 - удалить товар по id\n3 - удалить товар по названию\n\
4 - изменить количество товара\n5 - изменить стоимость товара\n6 - выход из программы", 6);

    switch(+action){
        case 1:{
            product = new Object();
            key = prompt("Введите ключ: ");
            alert(Add(key, product, productStorage) ? "Товар добавлен" : "Товар не добавлен");
            break;
        }
        case 2:{
            key = prompt("Введите ключ, который хотите удалить: ");
            alert(DeleteOnId(key, productStorage)?"Товар удален":"Товар не был удален");
            break;
        }
        case 3:{
            tempName = prompt("Введите название товара который хотите удалить: ", "");
            tempName = tempName.toLowerCase();
            
            alert(DeleteOnName(tempName, productStorage) ? "Объект удален" : "Объект не удален");
            break;
        }
        case 4:{
            let key = prompt("Введите ключ продукта который хотите изменить: ", "");
            alert(ChangeCountOfProduct(key, productStorage) ? "Количество изменено" : "Количество не изменено");
            break;
        }
        case 5:{
            let cost = prompt("Введите новую цену: ", "");
            alert(ChangeCostOfProduct(cost, productStorage) ? "Цена изменена" : "Цена не изменена");
            break;
        }
        case 6:{
            flag = false;
            alert("Вы выщди из программы!");
            break;
        }
        default:
            alert("Выбран некорректный пункт!");
    }
    alert(ShowList(productStorage));
}

function Add(key, obj, collection)
{
    obj = new Object();

    if(productStorage.has(key))
    {
        alert("Такой ключ уже есть!");
        return false;
    }
    obj.name = (prompt("Введите навзание товара: ", "")).toLowerCase();
    obj.count = prompt("Введите количество товара: ", 0);
    obj.cost = prompt("Введите цену на товар: ", 0);

    if(!(obj.count > 0 && obj.cost > 0 && obj.name != ""))
    {
        obj = null;
        alert("Введены некорректные данные товара!");
        return false;
    }
    collection.set(key, obj);
    return true;
}

DeleteOnId = (key, collection) => collection.delete(key);

function DeleteOnName(delName, collection)
{
    let flag = false;
    for(let [id, item] of collection.entries())
        if(item.name == delName && collection.delete(id)){
            flag = true;
            //break;
        }
    return flag;
}

function ChangeCountOfProduct(id, collection)
{
    if(collection.has(id)){
        collection.get(id).count = prompt("Введите новое количество товара: ", "");
        return true;
    }
    return false;
    
    /*for(let key of collection.keys()){
        if(id === key){
            collection.get(key)
            item.count = prompt("Введите новое количество товара: ", "");
            flag = true;
            break;
        }
    }*/
    //return flag
}

function ChangeCostOfProduct(id, collection)
{
    if(collection.has(id)){
        collection.get(id).cost = prompt("Введите новое цену товара: ", "");
        return true;
    }
    return false;


    /*let flag = false;
    for(let [key, item] of collection.keys()){
        if(id === key){
            item.cost = prompt("Введите новую стоимость товара: ", "");
            flag = true;
            break;
        }
    }
    return flag*/
}

function ShowList(collection)
{
    str = "";
    for(let obj of collection.entries())
    {
        str += `key: ${obj[0]} name: ${obj[1].name} cost: ${obj[1].cost} count: ${obj[1].count}\n`;
    }
    str += `Количество продуктов: ${collection.size}`;
    return str;
}