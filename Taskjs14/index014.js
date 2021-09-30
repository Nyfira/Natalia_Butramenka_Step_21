// class Todolist {
//     constructor (text) {
//         this.text = text;
//     };

//     addElem() {
//       let str = document.createElement(`div`)
//     };
// };

let btn = document.querySelector('#btnadd');
let text = document.querySelector('#text');
let task = document.querySelector('#task');

function addElement () {
    let div = document.createElement('div');
    
    let check = document.createElement('input');
    check.type = 'checkbox';

    let t = text.value;
    
    task.append(div);
    task.append(check);
    task.append(t);
};

btn.addEventListener('click', addElement);