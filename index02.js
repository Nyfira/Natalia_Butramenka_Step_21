//Задача 1
//let age = +prompt(`Сколько Вам лет?`);
//let check = (age <= 0) ? `Вы еще не родились`:
//(age <= 12) ? `ребенок`:
//(age <= 18) ? `подросток`:
//(age <= 60) ? `взрослый`:
//(age > 60) ? `пенсионер`:
//(`Интересный возраст`);
//alert(check);

//Задача 2
//let number = prompt(`Введите любую цифру от 0 до 9`);
//switch (number) {
//    case `1`:
//        alert(`!`);
//        break;
//    case `2`:
//        alert(`@`);
//        break;
//    case `3`:
//        alert(`#`);
//        break;
//    case `4`:
//        alert(`$`);
//        break;
//    case `5`:
//        alert(`%`);
//        break;
//    case `6`:
//        alert(`&`);
//        break;
//    case `8`:
//        alert(`*`);
//        break;
//    case `9`:
//        alert(`(`);
//        break;
//    case `0`:
//        alert(`)`);
//        break;
//    default:
//        alert(`Попробуй еще раз`);    
//};

//Задача 3
//let three = prompt(`Введите трехзначное число`);
//let a = Math.floor((`${three}`/1)%10);
//let b = Math.floor((`${three}`/10)%10);
//let c = Math.floor((`${three}`/100)%10);
//let check = (a == b == c || a == b || a == c || b == c) ? `в числе присутствуют одинаковые цифры`:
//(`одинаковых цифр не обнаружено`);
//alert(check);

//Задача 4
//let date = +prompt(`Введите 4 цифры обозначающих год`);
//let x = (date%400 == 0 || date%4 == 0 && date%100 !== 0) ? `год высокосный`:
//(`год не высокосный`);
//alert(x);

//Задача 5
//let five = +prompt(`Введите пятиразрядное число`);
//let a = String(Math.floor((`${five}`/1)%10));
//let b = String(Math.floor((`${five}`/10)%10));
//let c = String(Math.floor((`${five}`/100)%10));
//let d = String(Math.floor((`${five}`/1000)%10));
//let e = String(Math.floor((`${five}`/10000)%10));
//let check = (five == a+b+c+d+e) ? `это палиндром`:
//(`это случайный набор цифр`);
//alert(check);

//Задача 6
//let USD = +prompt(`Сколько долларов США желаете обменять?`);
//let val = prompt(`Какой вид валюты предпочитаете?`);
//const EUR = 0.84;
//const UAH = 27;
//const AZN = 1.7;
//switch (val) {
//    case `EUR`:
//        alert(`${USD*EUR}`);
//        break;
//    case `UAH`:
//        alert(`${USD*UAH}`);
//        break;
//    case `AZN`:
//        alert(`${USD*AZN}`);
//        break;
//    default:
//        alert(`недостаточно средств`);
//};    

//Задача 7
//let sold = +prompt(`Сумма покупки (руб)`);
//let sale = (sold <= 199) ? `К оплате ${sold} руб. скидка составила 0 руб.`:
//(sold <= 299 ) ? `К оплате ${sold*0.97} руб. скидка составила ${sold*0.03} руб.`:
//(sold <= 499 ) ? `К оплате ${sold*0.95} руб. скидка составила ${sold*0.05} руб.`:
//(sold => 500 ) ? `К оплате ${sold*0.93} руб. скидка составила ${sold*0.07} руб.`:
//(`недостаточно средств`);
//alert(sale);

//Задача 8
//let circle = +prompt(`Длинна окружности`);
//let square = +prompt(`Периметр квадрата`);
//const p = 3.14;
//// радиус окружности
//let r = (circle/(2*p));
//// сторона квадрата
//let a = (square/4);
//let x = (r == a/2) ? `Окружность вписаная в квадрат`:
//(r < a/2) ? `Окружность помещается в квадрате`:
//(`Окружность выходит за стороны квадрата`);
//alert(x);

//Задача 9
//let qvest1 = prompt(`Введите цифру: 1, 2 или 3.`);
//let qvest2 = prompt(`Правда что Земля квадратная? (да, нет, незнаю)`);
//let qvest3 = prompt(`Все синие ягоды ядовитые? (да, нет, незнаю)`);
//let x = Number(qvest1 == `1` && `10` || qvest1 == `2` && `20` || qvest1 == `3` && `30`);
//let y = Number(qvest2 == `да` && `0` || qvest2 == `нет` && `30` || qvest2 == `незнаю` && `10`);
//let z = Number(qvest3 == `да` && `10` || qvest3 == `нет` && `30` || qvest3 == `незнаю` && `10`);
//alert(`Поздравляю! Вы набрали ${x+y+z} баллов.`);

