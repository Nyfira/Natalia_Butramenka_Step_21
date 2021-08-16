//  Task 1
//function factorial(n) {
//    console.log(n);
//return n ? n * factorial (--n) : 1; 
//};
//console.log(factorial(5));

// Task 2  
//function ryad(a,b) {
//    document.write(a)
//return a === b ? 1 : ryad(++a,b); 
//};
//function revers(a,b) {
//    document.write(b)
//return a === b ? 1 : revers(a,--b); 
//};
//console.log(ryad(5,10));
//console.log(revers(5,10));

// Task 3
//function napered(x) {
//  document.write(x ? x%10 : ``);
//   if (x > 1) {
//napered(Math.floor(x*0.1))
//   };
//};
//console.log(napered(1234567));

// Task 4
//let resalt = 0;
//function summa(x) {
//    let a = x%10;
//    resalt = resalt + a; 
//    console.log(resalt);
//    if (x >= 1) {
//       summa(Math.floor(x*0.1))
//   };
//};
//console.log(summa(2234567));

// Task 5
//let a = `()`;
//function skobka(x) {
//    if (x !== 1) {
//        a = `(` + a + `)`;
//        skobka(--x)
//    };
//    return a;
//};
//console.log(skobka(3));

//  OBJECT

// Task 1
//let koord = { 
//    ax : 5 , 
//    ay : 20,
//    bx : 40,
//    by : 5
//};
//function pryamoy(a) {
//    console.log(`Верхняя левая  ${a.ax}, ${a.ay} Нижняя правая ${a.bx}, ${a.by}`)
//};
//pryamoy(koord)

// Task 2
//let koord = { 
//    ax : 5 , 
//    ay : 20,
//    bx : 40,
//    by : 5
//};
//function pryamoy(a) {
//    console.log(`${a.bx - a.ax}`);
//};
//pryamoy(koord)

// Task 3
//let koord = { 
//    ax : 5 , 
//    ay : 20,
//    bx : 40,
//    by : 5
//};
//function pryamoy(a) {
//    console.log(`${a.ay - a.by}`);
//};
//pryamoy(koord)

// Task 4
//let koord = { 
//    ax : 5 , 
//    ay : 20,
//    bx : 40,
//    by : 5
//};
//function pryamoy(a) {
//    let widht = a.bx - a.ax;
//    let height = a.ay - a.by;
//    console.log(`${widht * height}`);
//};
//pryamoy(koord)

// Task 5
//let koord = { 
//    ax : 5 , 
//    ay : 20,
//    bx : 40,
//    by : 5
//};
//function pryamoy(a) {
//    let widht = a.bx - a.ax;
//    let height = a.ay - a.by;
//    console.log(`${widht*2 + height*2}`);
//};
//pryamoy(koord)

// Task 6 ///
//let koord = { 
//    ax : 5 , 
//    ay : 20,
//    bx : 40,
//    by : 5
//};
//function pryamoy(a) {
//    a.ax = ax+a;
//    a.bx = bx+a;
//    console.log(`${a.bx - a.ax}`);
//};
//pryamoy(koord)

// Task 7 ///
//let koord = { 
//    ax : 5 , 
//    ay : 20,
//    bx : 40,
//    by : 5
//};
//function pryamoy(a) {
//    a.ay = ay+a;
//    a.by = by+a;
//    console.log(`${a.ay - a.by}`);
//};
//pryamoy(koord)

// Task 8 ///
//let koord = { 
//    ax : 5 , 
//    ay : 20,
//    bx : 40,
//    by : 5
//};
//function pryamoy(a,b) {
//    a.ax = koord.ax+a;
//    a.bx = koord.bx-a;
//    let widht = a.bx - a.ax;
//    b.ay = koord. ay+b;
//    b.by = koord.by-b;
//    let height = b.ay - b.by;
//   console.log(`${widht}, ${height}`);
//};
//pryamoy(koord)

// Task 9 ///
//let koord = { 
//    ax : 5 , 
//    ay : 20,
//    bx : 40,
//    by : 5
//};
//function pryamoy(a) {
//    a.ax = ax+a;
//   a.bx = bx+a;
//    let widht = a.bx - a.ax;
//    console.log(`Сместился по оси X на ${a} `);
//};
//pryamoy(koord)

// Task 10 ///
//let koord = { 
//    ax : 5 , 
//    ay : 20,
//    bx : 40,
//    by : 5
//};
//function pryamoy(a) {
//    a.ay = koord.ay+a;
//    a.by = koord.by+a;
//    let height = a.ay - a.by;
//   console.log(`Сместился по оси Y на ${a} `);
//};
//pryamoy(koord)

// Task 11 ///
//let koord = { 
//    ax : 5 , 
//    ay : 20,
//    bx : 40,
//    by : 5
//};
//function pryamoy(a,b) {
//    a.ax = ax+a;
//    a.bx = bx+a;
//    let widht = a.bx - a.ax;
//    b.ay = koord.ay+b;
//    b.by = koord.by+b;
//    let height = b.ay - b.by;
//   console.log(`Сместился по оси Y на ${a} `);
//};
//pryamoy(koord)

// Task 12 
//let koord = { 
//    ax : 5 , 
//    ay : 20,
//    bx : 40,
//    by : 5
//};
//function pryamoy(a,b) {
//    a.ax = ax+a;
//    a.bx = bx+a;
//    let widht = a.bx - a.ax;
//    b.ay = koord.ay+b;
//    b.by = koord.by+b;
//    let height = b.ay - b.by;
//   console.log(`Сместился по оси Y на ${a} `);
//};
//pryamoy(koord)


///dz 1

let auto = {
    prozvoditel : `Volkswagen`,
    model : `Polo`,
    age : `2015`,
    speed : `1500`
};
function automobil () {
alert(`auto`)
};
