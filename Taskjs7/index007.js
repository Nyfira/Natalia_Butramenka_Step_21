// for sobes 
// function palindrom(str) {
    
//     return str === (str.tolowerCase(``),newstr.split(``),reverse(``).join(``));
// };
// palindrom(`Coc`);

// 1

// function stroka(str1, str2) {
    
//     return str1.trim().length === str2.trim().length();
// };
// console.log(stroka(`Coc`, `carr`))

// 2

//function stroka(str) {
    
//    return str[0].toUpperCase().length + str.slice(1);
//};
//console.log(stroka(`carr`))

// 3

// let glas = [`а`, `у`, `о`, `ы`, `и`, `э`, `я`, `ю`, `ё`, `е`,];
// function strCount(str) {
//     let count = 0;
//     let newStr = str.toLowerCase();
//     let arr = newStr.split(``);
//     for (i=0; i<arr.length; i++) {
//         for (j=0; j<glas.length; j++) {
//         arr[i] === glas[j] ? count++ : count;
//         };
//     };
//     return count;
// };
// console.log(strCount(`маШинаппловыжлш`))

// 4

// let spam = [`100%`, `бесплатно`, `увеличение продаж`, `только сегодня`, `не удаляйте`, `ххх`,];
// function strSpam(spam) {
//     let count =0;
//     let arr = spam.toLowerCase();
//     console.log(arr)
//     for (i=0; i<spam.length; i++) {
//        arr.includes(spam[i]) ? count++ : count;
//     };

//     return !!count
    
// };
// console.log(strSpam(`приходи, бесплатно, суппер, бесплатно`))

// 5

// let str = (`hello, world! Welkome!`);
// function strLow(str, index) {
// let newStr = str.slice(0, index);


//     //return str[0].toUpperCase().length + str.slice(1);
     
    
// };
// strLow(str)
// console.log()

// 6

//function palindrom(str) {
    
//return str === (str.tolowerCase(``),newstr.split(``),reverse(``).join(``));
//};
// palindrom(`Coc`);

// 7
// let glas = [` `, `, `,];
// function strCount(str) {
//     let count = 0;
//     let newStr = str.toLowerCase();
//     let arr = newStr.split(``);
//     for (i=0; i<arr.length; i++) {
//         for (j=0; j<glas.length; j++) {
//         arr[i] === glas[j] ? count++ : count;
//         };
//     };
//     return count;
// };
// console.log(strCount(`Сколько долларов США, желаете обменять?`))

// 8
let glas = [` `, `, `,];
function strCount(str) {
    let result = 0;
    let newStr = str.toLowerCase();
    let arr = newStr.split(``);
    for (i=0; i<arr.length; i++) {
        for (j=0; j<glas.length; j++) {
        arr[i] === glas[j] ? result+arr[i] : result;
        };
    };
    return result;
};
console.log(strCount(`Сколько долларов США, желаете обменять?`))

// 9

