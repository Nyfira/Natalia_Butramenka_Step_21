// Task 1 
//let auto = {
//    prozvoditel : `Volkswagen`,
//    model : `Polo`,
//    age : 2015,
//    speed : 50,
//};
//function automobil () {
//  return alert(auto[key])
//};

//let key = prompt(`Что Вы хотите узнать об автомобиле?`);
//automobil();

//function time () {
//    if ((mile/(auto.speed))>4) {
//        t = (mile/(auto.speed))+Math.floor((mile/(auto.speed))/4);
//    } else {
//        t = mile/(auto.speed);
//    }; 
    
//  return alert(`На дорогу Вы потратите ${t} часов.`)
//};
//let mile = prompt(`Какое расстояние Вам необходимо проехать?`);
//time();

// Task 2
//let drob = {
//    chisl : 25, 
//    znam : 100,
//};

//function calculer () {
//    switch(znak) {
//        case `+`:
//            return alert(drob.chisl+drob.znam);
//        case `-`:
//            return alert(drob.chisl-drob.znam);
//        case `*`:
//            return alert(drob.chisl*drob.znam);
//        case `/`:
//            return alert(drob.chisl/drob.znam);
//        case `//`:
//            let result=0;
//            for (i=2; i<=drob.chisl; i++) {
//            result = (drob.chisl%i == 0 && drob.znam%i == 0) ? document.write(` ${i} `) : document.write(``);
//            };
//            return result;
//        default:
//            return alert(`Попробуйте еще раз`)
//    };
//};
    
//let znak = prompt(`Что Вы хотите сделать с числами? ('+', '-', '*', '/' или '//')`);
//calculer();

// Task 3
//let time = {
//    h : 3, 
//    m : 1,
//    s: 13,
//};
//function clock () {
//    hour=(time.h<10) ? `0`+time.h : time.h;
//    min=(time.m<10) ? `0`+time.m : time.m;
//    sec=(time.s<10) ? `0`+time.s : time.s;
//  return alert(`${hour}:${min}:${sec}`)
//};
//clock();

//function clockNew() {
//    allSec=time.h*60*60+time.m*60+time.s+chengS+chengM*60+chengH*60*60;
//    hour = (allSec>=3600) ? Math.floor(allSec/3600) : 0;
//    min = (allSec>=60) ? Math.floor(((allSec-(hour*3600))/60)) : 0;   
//    sec = (allSec<60) ? allSec : (allSec-(hour*3600)-(min*60));

//    hour=(hour<10) ? `0`+hour : hour;
//    min=(min<10) ? `0`+min : min;
//    sec=(sec<10) ? `0`+sec : sec;
    
//    return alert(`${hour}:${min}:${sec} or ${allSec} second`)
//  };
//  let chengH = +prompt(`Hours`);
//  let chengM = +prompt(`Minutes`);
//  let chengS = +prompt(`Sekonds`);
//clockNew();