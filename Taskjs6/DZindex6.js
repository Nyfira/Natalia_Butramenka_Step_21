// Task 1
//let spisok = [
//    {
//        name: `bread`,
//        number: 1,
//        status: `buy`,
//    },
//    {
//        name: `apple`,
//        number: 7,
//        status: `buy`,
//    },
//    {
//        name: `orange`,
//        number: 5,
//        status: `not buy`,
//    },
//    {
//        name: `yogurt`,
//        number: 4,
//        status: `not buy`,
//    },
//    {
//        name: `water`,
//        number: 3,
//        status: `buy`,
//    },
//];
// 1.1
//function pokupkiFiltr(a) {
//    let notbuy = a.filter(a => a.status == `not buy`);
//    let buy = a.filter(a => a.status == `buy`);
//    let newSpisok = [];
//    result = newSpisok.concat(notbuy, buy);

//    return result; 
//};
//function pokupkiVid(a) {
//    let str = ``;
//    let num = 1;
//        for (let i = 0; i < a.length; i++) {
//        str = (`${num}) ${a[i].name} - ${a[i].number} -- ${a[i].status}`);
//        str += `<br>`;
//        num++
//        document.write(str);
//    };
//};

//pokupkiVid(pokupkiFiltr(spisok));

// 1.2
//let paket2 = [
//    {
//        name: `chiken`,
//        number: 1,
//        status: `not buy`, 
//    },
//    {
//        name: `apple`,
//        number: 3,
//        status: `buy`, 
//    },
//    {
//        name: `milk`,
//        number: 2,
//        status: `buy`, 
//        },
//];

//function newSpisok (a, b) {
//    let newSpis = [];
//    let result = newSpis.concat(a, b);
//    return result;
//};

//let spisok2 = newSpisok(spisok, paket2)

//function pokupki2 (a) {
    
//    let result = Object.values(a.reduce((r, {name, number, status}) => {
//        let bb = (r[name] || (r[name] = {name,  num:0, status, count:0, get number() {
//            return this.num+this.count;
//        }
//        }
//        ));
//        bb.num = bb.num+number;
//        bb.count++
//        return r;
//    }, 
//    {}));

//    function delCount(a) {
//        for (let i = 0; i < a.length; i++) {
//            delete a[i].count;
//        }; 
//    };
//    delCount(result)
//return result;
    
//};

//function pokupkiVid2(a) {
//    let str = ``;
//    let num = 1;
//        for (let i = 0; i < a.length; i++) {
//        str = (`${num}) ${a[i].name} - ${a[i].num} -- ${a[i].status}`);
//        str += `<br>`;
//        num++
//        document.write(str);
//    };
//};
//pokupki2(spisok2);
//pokupkiVid2(pokupkiFiltr(pokupki2(spisok2)));

// 1.3
//let spisok2New = pokupki2(spisok2);
//let paket3 = [
//    {
//        name: `chiken`,
//        number: 1,
//        status: `buy`, 
//    },
//    {
//        name: `water`,
//        number: 3,
//        status: `buy`, 
//    },
//];

//let spisok3 = newSpisok(spisok2New, paket3)

//console.log(spisok3)
//
//pokupkiFiltr(spisok3)

//function pokupki3 (a) {
    
//    let result = Object.values(a.reduce((r, {name, num, status}) => {
//        let bb = (r[name] || (r[name]  = {name,  num, stat:0, get status() {
//            return this.stat;
//        }
//        }
//        ));
//        bb.stat = (status==`buy`) ? `buy` :
//        (status==`not buy`) ? `not buy` : 
//        `ky-ky`;    
//        return r;
//    }, 
//    {}));
//return result;
    
//};

//function pokupkiVid3(a) {
//    let str = ``;
//    let num = 1;
//        for (let i = 0; i < a.length; i++) {
//        str = (`${num}) ${a[i].name} - ${a[i].num} -- ${a[i].stat}`);
//        str += `<br>`;
//        num++
//        document.write(str);
//    };
//};

//pokupkiVid3(pokupkiFiltr(pokupki3(spisok3)));


// Task 2
// 2.1

//let spisok_pokupok = [
//    {
//        name: `bread`,
//        number: 1,
//        price: 5.15,
//    },
//    {
//        name: `apple`,
//        number: 7,
//        price: 3.15,
//    },
//    {
//        name: `orange`,
//        number: 5,
//        price: 4.10,
//    },
//    {
//        name: `yogurt`,
//        number: 4,
//        price: 6.03,
//    },
//    {
//        name: `water`,
//        number: 2,
//        price: 2.20,
//    },
//    {
//        name: `chips`,
//        number: 2,
//        price: 3.66,
//    },
//    {
//        name: `pencil`,
//        number: 2,
//        price: 1.01,
//    },
//    {
//        name: `shorts`,
//        number: 4,
//        price: 30.99,
//    },
//    {
//        name: `aiphon`,
//        number: 1,
//        price: 115.00,
//    },
//    {
//        name: `gum`,
//        number: 1,
//        price: 2.00,
//    },
//];
//function magazin() {
//    let str1 = (`OOO Shop`);
//        str1 += `<p>`;
//    let str2 = (`Chek № 1`);    
//        str2 += `<p>`;
//        document.write(str1,str2);
//};
//magazin()

//function chek(a) {
//    let str = ``;
//    let num = 1;
//    for (let i = 0; i < a.length; i++) {
//        str = (`${num})  ${a[i].name} ----- ${a[i].number} * ${a[i].price}    =  ${a[i].number * a[i].price} `);
//        str += `<br>`;
//        num++
//        document.write(str);
//    };
//};
//chek(spisok_pokupok)

// 2.2

//function itogo(a) {
    
//    let itogo=0;
//    for (let i = 0; i < a.length; i++) {
//        itogo += a[i].number * a[i].price;
//    };
//    let str = (`ITOGO: ${itogo} p.`);
//    str += `<p>`;
//    let result = str.bold();
    
//    let str2 = (`----------------------------------------`);
//    str2 += `<p>`;

//    document.write(str2, result, str2)
//};

//itogo(spisok_pokupok)

// 2.3

//function bigPokupka(a) {

//    let big = 0;
//    for (let i = 0; i < a.length; i++) {
//        if (big < (a[i].number*a[i].price)) {
//            big = a[i].number*a[i].price;
//        }; 
//    };
    
//    let samyy = a.filter(a => a.number*a.price == big);
//   
//    let str = (`Самая дорогая покупка: `);
//    str += `<br>`;
//    let result = str.italics();
//    let str2 = (`${samyy[0].name} ----- ${samyy[0].number} * ${samyy[0].price}   = ${samyy[0].number * samyy[0].price} p.`)   
//    str2 += `<p>`;
//    document.write(result,str2)
 
//};
//bigPokupka(spisok_pokupok)

// 2.4
//function srPrice(a) {
    
//    let sumPrice = 0;
//    for (let i = 0; i < a.length; i++) {
//        sumPrice += a[i].price;
//    };
    
//    let sumNumber = 0;
//    for (let i = 0; i < a.length; i++) {
//        sumNumber += a[i].number;
//    };

   
//   result=Math.floor((sumPrice/sumNumber)*100)/100;
//        console.log(result)
//    let str = (`Средняя стоимость одного товара в чеке: ${result} p.`);
//    str += `<br>`;
//    document.write(str)
//};

//srPrice(spisok_pokupok)

// Task 3

//let style = [
//    {
//        name: `color`,
//        volume: `blue`,
//    },
//    {
//        name: `font-size`,
//        volume: `18px`,
//    },
//    {
//        name: `text-align`,
//        volume: `right`,
//    },
//    {
//        name: `font-style`,
//        volume: `italic`,
//    },
//    {
//        name: `text-decoration`,
//        volume: `overline`,
//    },
//    {
//        name: `text-decoration-color`,
//        volume: `#808000`,
//    },
//];
//let text = String(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic iure velit commodi quasi ut. Voluptatibus magni expedita est? Ipsam minus libero nam atque ipsa laborum illum pariatur ducimus fugiat!`)

//function styleText(s, t) {
//    document.write(t) 
//    let l = ``;
//    for (let i = 0; i < s.length; i++) {
//        l += `${s[i].name}`+`:`+ `${s[i].volume}`+`;`;
//    };
//    console.log(l)
//    result = `<p style="${l}">`+t+`</p>`;
//    document.write(result)  
//};

//styleText(style, text)

// Task 4

let auditory = [
    {
        name: `astronomiy`,
        sit: 12,
        facultet: `Cosmichesky`,
    },
    {
        name: `mathematyka`,
        sit: 20,
        facultet: `Cosmichesky`,
    },
    {
        name: `phisice`,
        sit: 16,
        facultet: `Cosmichesky`,
    },
    {
        name: `acterskoe remeslo`,
        sit: 10,
        facultet: `Cultury`,
    },
    {
        name: `vocal`,
        sit: 18,
        facultet: `Cultury`,
    },
    {
        name: `horeografiy`,
        sit: 10,
        facultet: `Cultury`,
    },
    {
        name: `himiy`,
        sit: 16,
        facultet: `Medicin`,
    },
    {
        name: `biologia`,
        sit: 16,
        facultet: `Medicin`,
    },
    {
        name: `anatomiy`,
        sit: 12,
        facultet: `Medicin`,
    },
];

//function VidAllAud(a) {

//    let facultetArr = Object.values(a.reduce((r, {name, sit, facultet}) => {
//        let bb = (r[facultet] || (r[facultet]  = {name,  sit, facultet}));
//        return r;
//    }, 
//    {}));
//    
//    fac=``;
//    for (let i = 0; i < facultetArr.length; i++) {
//        fac = (`<p>${facultetArr[i].facultet}:</p>`);
//        document.write(fac);
//        
//        let aud = a.filter(a => a.facultet == facultetArr[i].facultet);
//        let num =1;
//        for (let i = 0; i < aud.length; i++) {
//            aud2 = (`${num}) ${aud[i].name}: ${a[i].sit} mest;`);
//            aud2 += `<br>`;
//            num++;
//            document.write(aud2);
//        };
//    };
//    
//};

//VidAllAud(auditory)

// 4.2

//let aud = prompt(`Facultet?`);
//function VidOneAud(a, num) {
//    fac = (`<p>${num}:</p>`);
//    document.write(fac);
        
//    let aud = a.filter(a => a.facultet == num);
//        let number =1;
//        for (let i = 0; i < aud.length; i++) {
//            aud2 = (`${number}) ${aud[i].name}: ${aud[i].sit} mest;`);
//            aud2 += `<br>`;
//            number++;
//            document.write(aud2);
//        };
//};
//VidOneAud(auditory, aud)

// 4.3

let gruppa = {
    name: `gruppa 1`,
    number: 12,
    facultet: `Medicin`,
};

//function VidAudforGrupp(a, gr) {
//    document.write(`<p>Для ${gr.name} на факультете ${gr.facultet} подходят следующие аудитории:</p>`);
//    let audFac = a.filter(a => a.facultet == gr.facultet);
//    let aud = audFac.filter(a => a.sit >= gr.number);
//        let number =1;
//        for (let i = 0; i < aud.length; i++) {
//            aud2 = (`${number}) ${aud[i].name}: ${aud[i].sit} mest;`);
//            aud2 += `<br>`;
//            number++;
//            document.write(aud2);
//        };
//};
//VidAudforGrupp(auditory, gruppa)

// 4.4
let sit = prompt(`Number`);
function VidAudSit(a, n) {
    
};
VidAudSit(auditory, sit)