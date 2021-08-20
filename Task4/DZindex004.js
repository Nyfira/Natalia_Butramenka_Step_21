//  Task 1
//function num(a,b) {
//    let x = (a<b) ? `-1`:
//    (a>b) ? `1`:
//    (a==b) ? `0`:
//   (`опаньки`);
//    return (x);
//};
//console.log(num(154,154));

//  Task 2
//function num(a) {
//let x = 1;
//for (a; a > 0; a--) {
//    x = x * a;
//    };
//return alert(x); 
//};
//console.log(num(6));

//  Task 3
//function num3(a,b,c) {
//    let x = (`${a}${b}${c}`);
//    return (x);
//};
//console.log(num3(2,5,1));

// Task 4
//function square(a,b=0) {
//if (b == 0) {
//    s = a*a;
//} else {
//    s = a*b;
//};
//return (s);
//};
//console.log(square(2));
    
// Task 5
//function sov(a) {
//let result = 0;
//for (let i = 1; i<a ; i++) {
//    if (a%i === 0) {
//        result=result+i;
//    };
//};
//let chek = (result == a) ? `совершенное число`:
//`повторите попытку`;
//return alert(chek);
//};
//console.log(sov(28));

// Task 6
//function sov(start,finish) {
//   for (start; start <= finish; start++){
//        let result = 0;  
//        for (let i = 1; i<start; i++) {
//           if (start%i === 0) {
//            result=result+i;
//           };
//        };
//        let chek = (result == start) ? ` ${result} ` : ``;
//        document.write(chek)
//    }; 
//};
//sov(1,500);

// Task 7
//function clock(hours,min=0,sec=0) {
//    hours=(hours<10) ? `0`+hours : hours;
//    min=(min<10) ? `0`+min : min;
//    sec=(sec<10) ? `0`+sec : sec;
//    return alert(`${hours}:${min}:${sec}`);
//};
//clock(10,0,30);

// Task 8
//function second(hours=0,min=0,sec=0) {
//    allSec=hours*60*60+min*60+sec;
//    return alert(`${allSec} seconds`);
//};
//second(3,5,16);

// Task 9
//function time(allsec) {
//   hours = (allsec>=3600) ? Math.floor(allsec/3600) : 0;
//   min = (allsec>=60) ? Math.floor(((allsec-(hours*3600))/60)) : 0;   
//   sec = (allsec<60) ? allsec : (allsec-(hours*3600)-(min*60));

//   hours=(hours<10) ? `0`+hours : hours;
//   min=(min<10) ? `0`+min : min;
//   sec=(sec<10) ? `0`+sec : sec;

//   return alert(`${hours}:${min}:${sec}`);
//};
//time(3605);

// Task 10
function timeRazn(hours1=0,min1=0,sec1=0,hours2=0,min2=0,sec2=0) {
   let allsec = Math.abs((hours1*60*60+min1*60+sec1)-(hours2*60*60+min2*60+sec2));

   h = (allsec>=3600) ? Math.floor(allsec/3600) : 0;
   m = (allsec>=60) ? Math.floor(((allsec-(h*3600))/60)) : 0;   
   s = (allsec<60) ? allsec : (allsec-(h*3600)-(m*60));

   h=(h<10) ? `0`+h : h;
   m=(m<10) ? `0`+m : m;
   s=(s<10) ? `0`+s : s;

   return alert(`Raznytca ${h}:${m}:${s}`);
};
timeRazn(3,0,177,3,0,1)