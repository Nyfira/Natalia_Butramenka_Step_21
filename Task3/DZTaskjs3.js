// Задача 1
//let a = +prompt(`start`);
//let b = +prompt(`finish`);
//let result = 0;
//let start = ( a < b ? a : b );
//let count = 0;
//let dif = Math.abs (a-b);
//while ( count <= dif ){
//    result = result + start;
//    start++;
//    count++;
//};
//document.write(`${result}`);  

// Задача 2
//let a = +prompt(`number 1`);
//let b = +prompt(`number 2`);
//let result = 0;
//let small =(a<b ? a : b );
//while (small => 0) {
//    if (a%small === 0) {
//        if (b%small === 0) {
//            alert(small);
//            break;    
//       }
//    }
//    small--;
//};

// Задача 3 
//let a = +prompt(`Number`);
//let result = 0;
//while (a >= result) {
//   if (a%result === 0) {
//      document.write(` ${result}`);
//      }
//    result++;
//};

// Задача 4 
//let num = prompt(`Number`);
//let i = 10;
//let count = 1;
//if (num < i) {
//    document.write(` ${count}`);
//} else {
//    for (i; Math.floor(num/i) != 0; i=i*10) {
//       result=i/i;
//       count = (count + result);
//    };
// document.write(` ${count}`);
//};

// Задача 5  
//let p = 0;
//let o = 0;
//let zero = 0;
//let ch = 0;
//let nch = 0;
//let i = 10;
//while (i !== 0) {
//   let number = +prompt(`Введите число`);
//   number > 0 ? p++ : p;
//   number < 0 ? o++ : o;
//   number === 0 ? zero++ : zero;
//   number%2 ==0 ? ch++ : ch;
//  number%2 !== 0 ? nch++ : nch;
//   i--;
//};
//alert(`pologitelnyh ${p}, otritsatelnyh ${o}, zero ${zero}, chet ${ch}, nechet ${nch}`);

// Задача 6
//do {
//   let x = +prompt(`number 1`);  
//   let oper = prompt(`Operator`); 
//   let y = +prompt(`number 2`); 
//    switch (oper) {
//       case `+`:
//           alert(`${x}+${y}=${x+y}`);
//           break;
//        case `-`:
//           alert(`${x}-${y}=${x-y}`);
//           break;
//        case `*`:
//           alert(`${x}*${y}=${x*y}`);
//          break;
//        case `/`:
//           alert(`${x}/${y}=${x/y}`);
//           break;
//        default:
//            alert(`Error, try again.`)
//    };
//    ans = prompt(`Try again? (yes,no)`);
//} while (ans == `yes`) {
//    alert(`BYU BYU`);
//};

// Задача 7
//let number = +prompt(`Введите число`);
//let chek =  +prompt(`Сколько цифр переместить?`);
//let i = 10;
//let count = 1;
//for (i; Math.floor(number/i) != 0; i=i*10) {
//    result=i/i;
//    count = (count + result);
//};
//let a = (10**(`${count-chek}`));
//let start = String(Math.floor((`${number}`/1)%a));
//let finish = Math.floor(`${start+number}`/a);
//alert(`${finish}`);

// Задача 8
//do {
//   alert(`День недели понедельник. Хотите увидеть следующий день?`);
//   alert(`День недели вторник. Хотите увидеть следующий день?`);
//   alert(`День недели среда. Хотите увидеть следующий день?`);
//   alert(`День недели четверг. Хотите увидеть следующий день?`);
//   alert(`День недели пятница. Хотите увидеть следующий день?`);
//   alert(`День недели суббота. Хотите увидеть следующий день?`);
//   alert(`День недели воскресенье. Хотите увидеть следующий день?`);
//};
//while (true) {
//};

// Задача 9
let a = 1;
let b = 0;
while (b<=10 && a<=9) {
   c=a*b;
   a++;
   b++;
   
};
document.write(`${a}*${b}=${c}`);

// Задача 10
//let n = String(`Загадайте число от 0 до 100.`);
//while () {}



