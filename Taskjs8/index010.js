// Task 1
// function random(){
//     return Math.floor(Math.random() * 100);
// }
// elem.onclick = function(event) {
//     if (event.which===1) {
//         document.getElementById("tik").innerHTML = random();
//     }
// }

// Task 2

document.getElementById("click123").onmousemove = function (event){

    document.getElementById("y").innerHTML = (`Y = `+event.offsetY);
    document.getElementById("x").innerHTML = (`X = `+event.offsetX);

}
document.onclick = function(event1) {
if (event1===1) {
    document.getElementById("lr").innerHTML = ('Левая кнопка');
}
}

document.oncontextmenu = document.getElementById("lr").innerHTML = ('Правая кнопка');
    