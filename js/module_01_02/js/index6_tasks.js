'use strict';
let enemy = [];

for (let y = 100; y <= 175; y += 75) {
    for (let x = 25; x <= 925; x += 100){
        // let obj = {
        //     left: x,
        //     top: y
        // };
        // obj.top = y;
        // obj.left = x;
        // console.log(obj);
        enemy.push({left: x, top: y});
    }
}
console.log(enemy);