let name = prompt('Как Вас зовут?');
alert(`Привет, ${name}`);

let age = +prompt('Пожалуйста введите год Вашего рождения');
const date = 2021;
alert(`Ваш возраст ${date - age} лет (года)`);

let long = +prompt('Какова длинна стороны квадрата? (см)');
alert(`Периметр квадрата составляет: ${long * 4} см`);

// как написать степень индексом?//
let long2 = +prompt('Каков радиус окружности? (см)');
const p = 3.14;
alert(`Площадь окружности составляет: ${p * long2 ** 2} см2`);

let distance = +prompt('Какое расстояние между городами? (км)');
let time = +prompt('Сколько времени можно потратить на путь? (ч)');
alert(`Вам необходимо двигаться со скоростью не менее ${distance/time} км/ч`);

let usa = +prompt('Какое количество долларов США желаете перевести в ЕВРО?');
const curs = 0.84;
alert(`${usa*curs} EURO`);

let volume = +prompt('Сколько Гб у Вашей флешки?');
alert(`На данный носитель помещается ` + (Math.floor (`${volume}` * 1024 / 820)) + ` файла(-ов)`);

let cash = +prompt('Сколько у Вас с собой денег? (руб)');
let price = +prompt('Цена за одну шоколадку?');
if (cash<price) {
    alert('У Вас недостаточно денег')
} else if (cash%price==0) {
    alert(`Вы можете купить ${cash/price} шоколадки(-ок)`)
} else { 
    alert(`Вы можете купить` + (Math.floor(`${(cash/price)}`)) + `шоколадки(-ок) и у Вас останется ${cash-(Math.floor(`${(cash/price)}`))*price} руб.`)
}; 

let number = +prompt('Введите трехзначное число');
let a = String(Math.floor((`${number}`/1)%10));
let b = String(Math.floor((`${number}`/10)%10));
let c = String(Math.floor((`${number}`/100)%10));
alert(a+b+c); 
