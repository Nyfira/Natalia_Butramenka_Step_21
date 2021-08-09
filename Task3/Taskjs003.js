// Задача 1
//let x = +prompt(`Сколько раз вывести # ?`);
//let y = 0;
//while (y < x ) {
//    document.write('#');
//    y++;
//};

// Задача 2
//let x = +prompt(`Введите число?`);
//let y = 0;
//while (y <= x) {
//    document.write(x--);
//};

// Задача 3
//let x = +prompt(`Введите число?`);
//let y = +prompt(`В какую степень возвести число?`);
//let rezult = 1;
//let i = 1;
//while (i<=y) {
//    rezult *=x;
//    i++; 
//}; 
//document.write(rezult); 

// Задача 4
//let x = +prompt(`Введите 1 число?`);
//let y = +prompt(`Введите 2 число?`);
//let i = x > y ? x : y;
//while (i => 1) {
//    if(x % i === 0) {
//       if(y % i === 0) {
//            document.write(`${i}`);
//        }
//    };
//    i--;
//};


// Задача 5
//let x = +prompt(`Введите 1 число?`);
//let c = 1;
//let a = 1;
//while (c<=x) {
//    a *= x;
//    x--; 
//};
//document.write(a);

// Задача 6
//let ans;  
//do {
//    x = +prompt(`Решите пример: 2+2*2 ?`);
//} while (x !== 6) {
//};
//document.write(`Правильно`);

//Задача 7
//let x = +prompt(`Введите 1000`);  
//let fifty;
//let coant=0;
//do {
//   x=x%2;
//} while (x <=! 50) {
//    coant++
//};
//document.write(`${fifty}`);

// Задача 1дз
//let a = +prompt(`start`);
//let b = +prompt(`finish`);
//let result = 0;
//let start =( a < b ? a : b );
//while ( a !== b ) {
//    result = result + a;
//    a++;
//};
//document.write(`${result+b}`);  

// Задача 2дз
//let a = +prompt(`1`);
//let b = +prompt(`2`);
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

// Задача 3 дз
//let a = +prompt(`Number`);
//let result = 0;
//while (a !== result) {
//   if (a%result === 0) {
//      document.write(`${result}`);
//      }
//    result++;
//};

// Задача 4 дз
//let num = prompt(`Number`);
//let count = 0;
//let ches = 1;
//let i =0;
//let = fix (num[i]) ? count++ : count;
//i++;
//let b = Math.floor((`${num/ches}`)%10);
//while (i < count) {
//};

// Задача 4 дз 2 вар (через machfloor и счетчик)

// Задача 5 дз 
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
//alert(`pologitelny${p}, otritsatelny${o}, zero${zero}, chet${ch}, nechet${nch}`);

// Задача N
//let x = +prompt(`Введите число?`);
//let y = 1;
//while (y <= x) {
//    x--;
//    document.write(` ${x}`);
//};
 
// Задача NN2
//let x = +prompt(`Calculer`);  
//let i=0;
//while (i <= 10) {
//    b=x*i;
//    i++;
//    document.write(` ${b}`);
//};

// Задача NN3
//let a = +prompt(`start`);
//let result = 0;
//while ( a !== 0 ) {
//    result = result + a;
//    a--;
//};
//document.write(`${result}`);  

// Задача NN4
//let num = +prompt(`start`);
//for(let i=1; i<=100; i++){
//    if (i%num === 0) {
//        document.write(i);
//    };
//};

// Задача NN5
//let num = +prompt(`start`);
//let num2 = +prompt(`finish`);
//let start =( num < num2 ? num : num2 );
//let coant = 0;
//for(let i=num; i<=num2; i++){
//    coant++;
//    if (coant%4 === 0) {
//    document.write(` ${i}`);
//    };
//};

// Задача NN6
//let num = +prompt(`start`);
//let isprostoe = true;
//for(let i=2; i<=num; i++){
//    if (num%i === 0) {
///        isprostoe = false;
//       break;
//    };
//};
//isprostoe ? alert(`prostoe`) : alert(`ne prostoe`);
