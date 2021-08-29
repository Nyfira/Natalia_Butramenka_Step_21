// Task 1

// let bukva = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`, `а`, `б`, `в`, `г`, `д`, `е`, `ё`, `ж`, `з`, `и`, `й`, `к`, `л`, `м`, `н`, `о`, `п`, `р`, `с`, `т`, `у`, `ф`, `х`, `ц`, `ч`, `ш`, `щ`, `ъ`, `ы`, `ь`, `э`, `ю`, `я`,];
// let number = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`,];
// let znak = [`!`, `@`, `#`, `$`, `%`, `^`, `&`, `*`, `~`, `(`, `)`, `-`, `_`, `=`, `+`, `|`, `/`, `?`, `<`, `>`, `,`, `.`, `;`, `:`, `№`, `[`, `]`, `{`, `}`, `'`, `"`, ];
// function strCount(str) {
//     let countB = 0;
//     let countN = 0;
//     let countZ = 0;
//     let newStr = str.toLowerCase();
//     let arr = newStr.split(``);
//     for (i=0; i<arr.length; i++) {
//         for (j=0; j<bukva.length; j++) {
//             arr[i] === bukva[j] ? countB++ : countB;
//         };
//         for (j=0; j<number.length; j++) {
//             arr[i] === number[j] ? countN++ : countN;
//         };
//         for (j=0; j<znak.length; j++) {
//             arr[i] === znak[j] ? countZ++ : countZ;
//             };    
//     };
//     document.write(`в строке ${countB} букв, ${countN} цифр и ${countZ} знаков.`)
   
// };
// console.log(strCount(`маШина++-6554578ппло++// №№  б..,,,выjhhjgжлш`))

// Task 2

// let edinitsy = [`one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`,];
// let desytki = [`twenty`, `thirty`, `forty`, `fifty`, `sixty`, `seventy`, `eighty`, `ninety`,];
// let frst_desytok = [`ten`, `eleven`, `twelve`, `thirteen`, `fourteen`, `fifteen`, `sixteen`, `seventeen`, `eighteen`, `nineteen`, ];
// function strNumber(str) {
//     let a = Number(str)
//     
//     if (a<20) {
//         i=str-10;
//         console.log(frst_desytok[i]);
//     } else {
//         let arr = str.split(``);
//         ii = arr[0]-2;
//         if (arr[1] == 0){
//             console.log(`${desytki[ii]}`)
//         } else {
//             j = arr[1]-1;
//             console.log(`${desytki[ii]} ${edinitsy[j]}`);
//         };
//     };
// };
// console.log(strNumber(`12`))

// Task 3

// let bukvaM = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`, `а`, `б`, `в`, `г`, `д`, `е`, `ё`, `ж`, `з`, `и`, `й`, `к`, `л`, `м`, `н`, `о`, `п`, `р`, `с`, `т`, `у`, `ф`, `х`, `ц`, `ч`, `ш`, `щ`, `ъ`, `ы`, `ь`, `э`, `ю`, `я`,];
// let number = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`,];
// let bukvaB = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`, `А`, `Б`, `В`, `Г`, `Д`, `Е`, `Ё`, `Ж`, `З`, `И`, `Й`, `К`, `Л`, `М`, `Н`, `О`, `П`, `Р`, `С`, `Т`, `У`, `Ф`, `Х`, `Ц`, `Ч`, `Ш`, `Щ`, `Ъ`, `Ы`, `Ь`, `Э`, `Ю`, `Я`,];
// function strCount2(str) {
// let arr = str.split(``);
// let newArr = [``];
//     for (i=0; i<arr.length; i++) {
//         for (j=0; j<bukvaM.length; j++) {
//             arr[i] === bukvaM[j] ? newArr[i]=bukvaM[j].toUpperCase() : ``;
            
//         };
//         for (j=0; j<number.length; j++) {
//             arr[i] == number[j] ? newArr[i]=`_` : ``;
//         };
//         for (j=0; j<bukvaB.length; j++) {
//             arr[i] === bukvaB[j] ? newArr[i]=bukvaB[j].toLowerCase()  : ``;
//         };    
//     };
//     console.log(...newArr)
//     document.write(...newArr)
// };
// strCount2(`маШина6554578пплобв51486ыjhZTBGhlhjg5жлш564GDGH`)

// Task 4

// function camelCase(str) {
//     let arr = str.split(``);
//     for (i=0; i<arr.length; i++) {
//         if (arr[i] == `-`) {
//            arr[i] =``; 
//            arr[i+1]=arr[i+1].toUpperCase();
//         };
//     };
//     console.log(...arr)
//     document.write(...arr)
// };
// camelCase(`background-color`)

// Task 5
// let bukvaB = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`, `А`, `Б`, `В`, `Г`, `Д`, `Е`, `Ё`, `Ж`, `З`, `И`, `Й`, `К`, `Л`, `М`, `Н`, `О`, `П`, `Р`, `С`, `Т`, `У`, `Ф`, `Х`, `Ц`, `Ч`, `Ш`, `Щ`, `Ъ`, `Ы`, `Ь`, `Э`, `Ю`, `Я`,];
// function abre(str) {
//     let arr = str.split(``);
//     arr[0]=arr[0].toUpperCase();
//     for (i=0; i<arr.length; i++) {
//         if (arr[i] == ` `) {
//            arr[i+1]=arr[i+1].toUpperCase();
//         };
//     };
    
//     let newArr =[``];
//     for (i=0; i<arr.length; i++) {
//         for (j=0; j<bukvaB.length; j++) {
//             arr[i] === bukvaB[j] ?  document.write(newArr[i]=bukvaB[j]) : ``;
//         };
//     };     
// };
// abre(`бутраменко наталья витальевна number`)

// Task 6

// let str = [`hello`, `coffee`, `999`, `12547`, `новая абвгдшка`,];
// function oneStr(...str) {
//     return console.log(str.reduce((a, i) => a + i, ``));
// };
// oneStr(...str);

// Task 7

// function kalkulator(str) {
//     let znak = [`+`, `-`, `*`, `/`,];    
//     let arr = str.split(``);
//     let operator=``;
//     for (i=0; i<arr.length; i++) {
//         for (j=0; j<znak.length; j++) {
//             if (arr[i] === znak[j]) {
//                 operator=znak[j];
//             };
//         };
//     };
//     let number=str.split(`${operator}`);
//     let result = (operator == `+`) ? number[0]+number[1]:
//     (operator == `-`) ? number[0]-number[1]:
//     (operator == `*`) ? number[0]*number[1]:
//     (operator == `/`) ? number[0]/number[1]:
//     ``;
//     document.write(`${number[0]} ${operator} ${number[1]} = ${result}`)
// };
// kalkulator(`32225-1000`);

// Task 8

// function spravka(url) {
//  let protocol = url.split(`:`);
//  let domen = protocol[1].split(`/`);
//  document.write(`protokol: ${protocol[0]}, domen: ${domen[2]}, put: /${domen[3]}/${domen[4]}`)   
// };
// spravka(`https://itstep.org/ua/about`);

// Task 9

// function razdelitel(str, z) {
//     let arr = Array.from(str);
//     let j =0;
//     let n = [``];
//     for (i=0; i<arr.length; i++) {
//         if (arr[i] !== z) {
//            n[j]=n[j]+arr[i];
//         } else {
//             j++;
//             n[j] = [``];
//         };
//     };
//     console.log(n)   
// };
// razdelitel(`nyfira0ky0kish0supper`, `0`);

// Task 10
let shablon = [`Today is %1 %2.%3.%4`, `Monday`, 10,
    8, 2020];
    console.log(shablon)
function shablonTest(a) {
    let text = a[0].split(`%`);
    console.log(text)   
};
shablonTest(shablon);

