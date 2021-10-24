let btnAdd = document.querySelector('#btnAdd');
let btnRemCheck = document.querySelector('#btnRemCheck');
let btnSaveTodo = document.querySelector('#saveTodo');
let btnRemTodo = document.querySelector('#removeTodo');
let text = document.querySelector('#text');
let task = document.querySelector('#task');
let allTask = document.querySelector('#allTask');
let didTask = document.querySelector('#didTask');
let progressLine = document.querySelector('#progressLine');

let num = 1;
let countTask =0;
let countTaskCheck =0;
let arrCheck = [];
let arrLabel = [];
let arrLabelItem = [];

allTask.innerHTML=countTask; 
didTask.innerHTML=countTaskCheck; 

function addItem () {
    let divTask = document.createElement('div');
    divTask.style.display = 'flex';
    divTask.style.justifyContent = 'space-between';
    divTask.id='item'+num;
        
    let divText = document.createElement('div');
    divText.style.display = 'flex';
    divText.style.justifyContent = 'left';
    
    let check = document.createElement('input');
    check.type = 'checkbox';
    check.id = 'check' +num;
    check.name = num;
        
    let label = document.createElement('label');
    label.id = 'label' +num;
    label.value = text.value;
    label.style.display = 'block';

    let editText = document.createElement('input');
    editText.id = 'editText' +num;
    editText.type = 'text';
    editText.value = label.value;
    editText.style.display = 'none';
    editText.style.border = 'none';
    editText.style.fontStyle = 'italic';
    editText.size = '50';

    let btnEndEdit = document.createElement('button');
    btnEndEdit.style.width = '50px';
    btnEndEdit.style.height = '20px';
    btnEndEdit.style.display = 'none';
    btnEndEdit.style.padding = '0';
    btnEndEdit.innerHTML = 'Confirm';
    btnEndEdit.style.border = '1px solid black';
    btnEndEdit.style.background = 'rgb(182, 236, 119)';
    btnEndEdit.style.borderRadius = '5px';
    btnEndEdit.id= 'btn'+num;
            
    let tex = text.value;

    let btnEdRem = document.createElement('div');
    btnEdRem.style.display = 'flex';
    btnEdRem.style.justifyContent = 'center';
    
    let btnEdit = document.createElement('button');
    btnEdit.style.width = '20px';
    btnEdit.style.height = '20px';
    btnEdit.style.display = 'flex';
    btnEdit.style.justifyContent = 'center';
    btnEdit.style.border = 'none';
    btnEdit.style.background = 'none';
    btnEdit.style.margin = '5px';
    
    let edit = document.createElement('img');
    edit.src = 'icons8-редактировать-48.png';
    edit.style.width = '15px';
    edit.style.height = '15px';
    edit.id= num;
    
    let btnRem = document.createElement('button');
    btnRem.style.width = '20px';
    btnRem.style.height = '20px';
    btnRem.style.display = 'flex';
    btnRem.style.justifyContent = 'center';
    btnRem.style.border = 'none';
    btnRem.style.background = 'none';
    btnRem.style.margin = '5px';
    
    let rem = document.createElement('img');
    rem.src = 'icons8-мусор-24.png';
    rem.style.width = '15px';
    rem.style.height = '15px';
    rem.id=num;
    
    btnEdit.append(edit);
    btnRem.append(rem);

    btnEdRem.append(btnEdit);
    btnEdRem.append(btnRem);

    divText.append(check);
    label.append(tex);
    divText.append(label);
    divText.append(editText);
    divText.append(btnEndEdit);

    divTask.append(divText);
    divTask.append(btnEdRem);

    task.append(divTask);

    arrLabel.push('label' +num);
    countTask++; 
    num++;
    allTask.innerHTML=countTask; 
    text.value='';
           
    btnEdit.addEventListener('click', editItem);
    check.addEventListener('click', changeCheckbox);
    check.addEventListener('click', progressBarColor);
    btnRem.addEventListener('click', remItem);
    btnRem.addEventListener('click', progressBarRem);
    btnRem.addEventListener('click', progressBarColor);
};

function editItem(event) {
    let item = event.target.id;
    let btnEndEdit = document.querySelector(`#btn${item}`);
    let editLabel = document.querySelector(`#label${item}`);
    let editText = document.querySelector(`#editText${item}`);
    editLabel.style.display = 'none';
    editText.style.display = 'block';
    btnEndEdit.style.display = 'block';
    
    function ItemBack() {
        editLabel.innerHTML=editText.value;
        editLabel.value=editText.value;
        editLabel.style.display = 'block';
        editText.style.display = 'none';
        btnEndEdit.style.display = 'none';
    };

    btnEndEdit.addEventListener('click', ItemBack);
};

function remItem(event) {
    let item = event.target.id;
    let task = document.querySelector(`#item${item}`);
    let check = document.querySelector(`#check${item}`);
    let indexTask = arrCheck.indexOf(`#item${item}`);
    let indexLabel = arrLabel.indexOf(`label${item}`);
    if (indexTask > -1) {
            arrCheck.splice(indexTask, 1);
        };
    if (indexLabel > -1) {
        arrLabel.splice(indexLabel, 1);
    };    
    if (check.checked) {
        countTaskCheck--;
        didTask.innerHTML=countTaskCheck; 
    };
    task.style.display = 'none';
    console.log(arrLabel);
};

function changeCheckbox(event) {
    let item = event.target.name;
    let task = document.querySelector(`#item${item}`);
    let check = document.querySelector(`#check${item}`);
    let indexTask = arrCheck.indexOf(`#item${item}`);
    let indexLabel = arrLabel.indexOf(`label${item}`);
    if (check.checked) {
        task.style.color = 'red';
        arrCheck.push(`#item${item}`);
        countTaskCheck++;
        didTask.innerHTML=countTaskCheck; 
        if (indexLabel > -1) {
            arrLabel.splice(indexLabel, 1);
        };
    } else {
        task.style.color = 'rgb(0, 102, 255)';
        task.style.textDecoration = 'none';
        if (indexTask > -1) {
            arrCheck.splice(indexTask, 1);
        };
        arrLabel.splice(item-1, 0, `label${item}`);
        countTaskCheck--;
        didTask.innerHTML=countTaskCheck;
        };
};

function remCheckItem() {
   let countRem =0;
    for (let i=arrCheck.length-1; i>=0; i--) {
        let task = document.querySelector(`${arrCheck[i]}`);
        task.style.display = 'none';
        arrCheck.splice(i, 1);
        countRem++;
    };
    countTaskCheck -= countRem;
    didTask.innerHTML=countTaskCheck; 
    countTask -= countRem;
    allTask.innerHTML=countTask; 
    if (countTaskCheck===0) {
        progressLine.style.width = 0;
    };
};

function progressBarAdd() {
    countTask++;
    allTask.innerHTML=countTask; 
};

function progressBarRem() {
    countTask--;
    allTask.innerHTML=countTask; 
};
    
function progressBarColor() {
    let progTask = countTaskCheck/countTask*100;
    progressLine.style.width = `${progTask}%`;
};

function setStorage() {
    let num = 1;
    arrLabel.sort();
    for (let i =0; i<countTask; i++) {
        let labelToSave = document.querySelector('#'+arrLabel[i]);
        let itemLabel = {
            number: '#label'+num,
            value: labelToSave.value,
        };
        arrLabelItem.push(itemLabel);
        num++;
    };
    localStorage.setItem('countTask', countTask.toString());
    localStorage.setItem('arrLabelItem', JSON.stringify(arrLabelItem));
    location.reload();
};

function removeStorage() {
    localStorage.clear();
    location.reload();
};

function loadTodo() {
   let count = localStorage.getItem(`countTask`);
   let bbb = localStorage.getItem('arrLabelItem');
   let aaa = JSON.parse(bbb);
   for (let i = 0; i<count; i++) {
        addItem();
        let labelLoad = document.querySelector(`${aaa[i].number}`);
        let editLabelLoad = document.querySelector(`#editText${i+1}`);
        labelLoad.innerHTML = aaa[i].value;
        labelLoad.value = aaa[i].value;
        editLabelLoad.value=aaa[i].value;
   };
};

btnAdd.addEventListener('click', addItem);
btnAdd.addEventListener('click', progressBarColor);
btnRemCheck.addEventListener('click', remCheckItem);
btnRemCheck.addEventListener('click', progressBarColor);
btnRemTodo.addEventListener('click', removeStorage);
btnSaveTodo.addEventListener('click', setStorage);
loadTodo();
