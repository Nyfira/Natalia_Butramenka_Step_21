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
    let divTask = document.createElement('div');
    divTask.style.display = 'flex';
    divTask.style.justifyContent = 'space-between';

    let divText = document.createElement('div');

    let check = document.createElement('input');
    check.type = 'checkbox';
    
    let tex = text.value;

    let btns = document.createElement('div');
    btns.style.display = 'flex';
    btns.style.justifyContent = 'center';

    let btnEdit = document.createElement('button');
    btnEdit.style.width = '20px';
    btnEdit.style.height = '20px';
    btnEdit.style.display = 'flex';
    btnEdit.style.justifyContent = 'center';
    btnEdit.style.border = 'none';

    let edit = document.createElement('img');
    edit.src = 'icons8-редактировать-48.png';
    edit.style.width = '15px';
    edit.style.height = '15px';

    let btnRem = document.createElement('button');
    btnRem.style.width = '20px';
    btnRem.style.height = '20px';
    btnRem.style.display = 'flex';
    btnRem.style.justifyContent = 'center';
    btnRem.style.border = 'none';

    let rem = document.createElement('img');
    rem.src = 'icons8-мусор-24.png';
    rem.style.width = '15px';
    rem.style.height = '15px';
    
    btnEdit.append(edit);
    btnRem.append(rem);

    btns.append(btnEdit);
    btns.append(btnRem);

    divText.append(check);
    divText.append(tex);

    divTask.append(divText);
    divTask.append(btns);

    task.append(divTask);
    console.log(divTask);


    
};



btn.addEventListener('click', addElement);

