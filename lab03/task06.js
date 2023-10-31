`use strict`

// task6
/* 
Создайте башню-пирамиду, состоящую из символов "*". 
В качестве входного параметра приходит число этажей башни.
Пример:
Башня с 3 этажами
 [
   "  *  ",
   " *** ", 
   "*****"
 ]
*/

const c = '*';
const gap = ' ';

function BuildTower(number){
    let tower = "";
    //tower.push(gap);
    tower+=gap
    
    let maxLength = number * 2 + 1;

    for(let i = 0; i < number; i++){
        
        for(let k = 0; k < (maxLength + 1)/2 - i; k++){
            //tower.push(gap);
            tower+=gap
        }
        for(let j = 1; j <= i * 2 + 1; j++){
            //tower.push(c);
            tower+=c
        }
        for(let s = 0; s < (maxLength + 1)/2 - i; s++){
            //tower.push(gap);
            tower+=gap
        }
        //tower.push('\n');
        tower+='\n'
    }

    return tower;
}

let floorsCount = prompt("Количество этажей: ")

alert(BuildTower(floorsCount));
console.log(BuildTower(floorsCount));




