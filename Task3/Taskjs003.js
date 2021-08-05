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
//let a = +prompt(`1`);
//let b = +prompt(`2`);
//let result = 0;
//let start =(a>b ? b : a );
//let finish =(a<b ? b: a );
//while (a !== b) {
//    result = result + start;
//    start = start + 1;
//};

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