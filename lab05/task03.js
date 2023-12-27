`use strict`

/*
Пользователь управляет движением объекта, 
вводя в модальное окно  команды left, right, up, down. 
Объект совершает 10 шагов в заданном направлении 
(т.е. высчитываются и выводятся в консоль соответствующие координаты) и 
запрашивает новую команду. Разработайте генератор, 
который возвращает координаты объекта, 
согласно заданному направлению движения. 
*/


function SetMoving(){
    let key = prompt("Введите направление: ", "");
    if(["up", "down", "left", "right"].includes(key)){
        gen.next(key).value
        SetMoving()
    }
}
function* Generator(){
    let x = 0
    let y = 0
    
    while(true){
        key = yield { x, y }
        switch(key){
            case "left":
                x--;
                break;
            case "right":
                x++;
                break;
            case "up":
                y++;
                break;
            case "down":
                y--;
                break;
        }
        console.log(`${x}, ${y}`);
    }
}

let gen = Generator()
gen.next()
SetMoving()