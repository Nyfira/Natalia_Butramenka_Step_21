// Task 1 

let text = document.querySelector('#text');

function showOnlyKey(event) {
    if(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 95 && event.keyCode <= 105) {
        event.preventDefault();
    };
};

text.addEventListener('keydown', showOnlyKey);

// Task 2

let modal = document.querySelector('#modal');
let open1 = document.querySelector('#open1');
let close1 = document.querySelector('#close1');

function showModal(event) {
    modal.style.display = 'block';
};

function hideModal() {
    modal.style.display = 'none';
};

open1.addEventListener('click', showModal);
close1.addEventListener('click', hideModal);

// Task 3

let space = document.querySelector('#space');
let ball = document.querySelector('#ball');

function getNewXY(el, event) {

    event.stopPropagation();
    let x = event.offsetX;
    let y = event.offsetY;
    if (x<45) {
        x=45;
    };
    if (y<45) {
        y=45;
    };

    let xmax = space.getBoundingClientRect();
    let ymax = space.getBoundingClientRect();
    if (x>(Math.floor(xmax.width))-45) {
        x=(Math.floor(xmax.width))-50;
    };
    if (y>(Math.floor(ymax.height))-45) {
        y=(Math.floor(ymax.height))-50;
    };

    let d = document.querySelector('#ball');
    let hightball = d.style.height.replace("px","");
    let widthball = d.style.width.replace("px","");
    let newx = (x-(Math.floor(widthball*0.5)));
    let newy = (y-(Math.floor(hightball*0.5)));
    
    d.style.left = newx + "px";
    d.style.top =  newy + "px";
}

ball.addEventListener('click', getNewXY);

// Task 4

let click = document.querySelector('#click');

function changeLight(event) {
    let el1 = document.querySelector('#light1');
    let el2 = document.querySelector('#light2');
    let el3 = document.querySelector('#light3');

    if(event && el1.style.backgroundColor === 'red') {
        el1.style.backgroundColor = 'gray'
        el2.style.backgroundColor = 'yellow'
    } else if(event && el2.style.backgroundColor === 'yellow') {
        el2.style.backgroundColor = 'gray'
        el3.style.backgroundColor = 'green'
    } else if(event && el3.style.backgroundColor === 'green') {
        el1.style.backgroundColor = 'red'
        el3.style.backgroundColor = 'grey'
    }
        
};

click.addEventListener('click', changeLight);


// Task 5

let str = document.querySelector('#str');


function highlight(event) {
        
        let numStr = event.target.id;
        let string = document.querySelector(`#`+`${numStr}`);
        str1.style.backgroundColor = 'bisque'; 
        str2.style.backgroundColor = 'bisque';
        str3.style.backgroundColor = 'bisque';
        str4.style.backgroundColor = 'bisque';
        str5.style.backgroundColor = 'bisque';
        str6.style.backgroundColor = 'bisque';
        str7.style.backgroundColor = 'bisque';
        
        string.style.backgroundColor = 'orange'; 
};

str.addEventListener('click', highlight);

// Task 6

let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2');
let tooltip = document.querySelector('#tooltip');
let tooltip2 = document.querySelector('#tooltip2');

function over() {

    if(btn) {
        if (btn.style.marginTop !== '70px') {
        tooltip.style.visibility = 'visible';
        tooltip.style.bottom = '-150%';
        } else {
            tooltip.style.visibility = 'visible';   
        };
        
    };
        
};

function over2() {

    if(btn2) {
        if (btn2.style.marginTop !== '70px') {
        tooltip2.style.visibility = 'visible';
        tooltip2.style.bottom = '-150%';
        } else {
            tooltip2.style.visibility = 'visible';   
        };
    };

};

function out() {
    
    tooltip.style.visibility = 'hidden';
    tooltip2.style.visibility = 'hidden';
        
};

btn.addEventListener('mouseover', over);
btn.addEventListener('mouseout', out);

btn2.addEventListener('mouseover', over2);
btn2.addEventListener('mouseout', out);
