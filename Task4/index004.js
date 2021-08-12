//  1
//function calculator(a,b) {
//    return Math.min(a,b);
//};
//console.log(calculator(5.7));

// 2
//function calculator(a,step) {
//    return Math.pow(a,step);
//};
//console.log(calculator(5,2));

// 3
//function calculator(a,b,znak) {
//    switch(znak) {
//        case `+`:
//            return a+b;
//       case `-`:
//            return a-b;
//        case `*`:
//            return a*b;
//        case `/`:
//            return a/b;
//        default:
 //           `недоступен знак`
//    }
//};
//console.log(calculator(5,7,`+`));

// 4
//function prostoe(num) {
//let a = true;
//for (let i=2; i<num; i++) {
//   if (num%i === 0 ) {
//       a = false;
//       break;
//   }
//};
//  a  ? alert(`pro`) : alert(`nepro`);
//};
//   console.log(prostoe(12));

 // 5
//function calculator(x) {
//let i=1;
//   while (i <= 10) {
//    b=x*i;
//    document.write(` ${x}*${i}=${b} \n`);
//    i++;
//   };
//};

//console.log(calculator(9));

// 6
//function divNum(num1,num2) {
//    let a = Math.floor(num1 / num2);
//    let b = num1-num2 *a;
//   return alert(b);
//};
//    console.log(divNum(20,3));

//let x = +prompt(`Calculer`);  

// 7
//function calculator(num1, num2=0, num3=0, num4=0, num5=0) {
//    return (num1+num2+num3+num4+num5);
//};
//    console.log(calculator(16));

// 8
//function calculator(num1, num2=0, num3=0, num4=0, num5=0) {
//    return Math.max(num1,num2,num3,num4,num5);
//};
//    console.log(calculator(2,20,15,16));

// 9
function chet_nechet(x,y) {
    let start = (x<y ? x : y)
    let count=0;
    let dif=Math.abs (x-y);
    result=0;
    chet= true;
    while (count<=dif) {
        result = start%2;
        if (start%2 === 0) {
         document.write(result);   
        };
        start++;  
        count++; 
    };
};    
console.log(chet_nechet(3,9));
    
// 10

ggg

