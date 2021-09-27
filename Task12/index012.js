// Task 1


//  Task 2

// let text = document.querySelector('#text')

// function stop() {
//     preventDefault();
// }

// text.addEventListener('contextmenu', stop);
// text.addEventListener('click', stop);

//  Task 4

let calculator = document.querySelector('#calcul')
let btn = document.querySelector('#btn')

let num1 = 0;
let num2 = 0;
let znac = 0;
let result = 0;
function addNum(event) {
    if(event) {
        num1 = event.target.value;

        
       
        // while(event.target.value !== "/") {
        //     num1 += num1;
        // };
        calculator.innerHTML = num1;


    }
    


}

btn.addEventListener('click', addNum);