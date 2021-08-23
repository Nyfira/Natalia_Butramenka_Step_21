// Task 1
let spisok = [
    {
        name: `bread`,
        number: 1,
        status: `buy`,
    },
    {
        name: `apple`,
        number: 7,
        status: `buy`,
    },
    {
        name: `orange`,
        number: 5,
        status: `not buy`,
    },
    {
        name: `yogurt`,
        number: 4,
        status: `not buy`,
    },
    {
        name: `water`,
        number: 3,
        status: `buy`,
    },
];
// 1.1
function pokupkiFiltr(a) {
    let notbuy = a.filter(a => a.status == `not buy`);
    let buy = a.filter(a => a.status == `buy`);
    let newSpisok = [];
    result = newSpisok.concat(notbuy, buy);

    return result; 
};
function pokupkiVid(a) {
    let str = ``;
    let num = 1;
        for (let i = 0; i < a.length; i++) {
        str = (`${num}) ${a[i].name} - ${a[i].number} -- ${a[i].status}`);
        str += `<br>`;
        num++
        document.write(str);
    };
};

//pokupkiVid(pokupkiFiltr(spisok));

// 1.2
let paket2 = [
    {
        name: `chiken`,
        number: 1,
        status: `not buy`, 
    },
    {
        name: `apple`,
        number: 3,
        status: `buy`, 
    },
    {
        name: `milk`,
        number: 2,
        status: `buy`, 
        },
];

function newSpisok (a, b) {
    let newSpis = [];
    let result = newSpis.concat(a, b);
    return result;
};

let spisok2 = newSpisok(spisok, paket2)

function pokupki2 (a) {
    
    let result = Object.values(a.reduce((r, {name, number, status}) => {
        let bb = (r[name] || (r[name] = {name,  num:0, status, count:0, get number() {
            return this.num+this.count;
        }
        }
        ));
        bb.num = bb.num+number;
        bb.count++
        return r;
    }, 
    {}));

    function delCount(a) {
        for (let i = 0; i < a.length; i++) {
            delete a[i].count;
        }; 
    };
    delCount(result)
return result;
    
};

function pokupkiVid2(a) {
    let str = ``;
    let num = 1;
        for (let i = 0; i < a.length; i++) {
        str = (`${num}) ${a[i].name} - ${a[i].num} -- ${a[i].status}`);
        str += `<br>`;
        num++
        document.write(str);
    };
};
pokupki2(spisok2);
//pokupkiVid2(pokupkiFiltr(pokupki2(spisok2)));

// 1.3
let spisok2New = pokupki2(spisok2);
let paket3 = [
    {
        name: `chiken`,
        number: 1,
        status: `buy`, 
    },
    {
        name: `water`,
        number: 3,
        status: `buy`, 
    },
];

let spisok3 = newSpisok(spisok2New, paket3)

console.log(spisok3)

//pokupkiFiltr(spisok3)

function pokupki3 (a) {
    
    let result = Object.values(a.reduce((r, {name, num, status}) => {
        let bb = (r[name] || (r[name]  = {name,  num, stat:0, get status() {
            return this.stat;
        }
        }
        ));
        bb.stat = (status==`buy`) ? `buy` :
        (status==`not buy`) ? `not buy` : 
        `ky-ky`;    
        return r;
    }, 
    {}));
return result;
    
};

function pokupkiVid3(a) {
    let str = ``;
    let num = 1;
        for (let i = 0; i < a.length; i++) {
        str = (`${num}) ${a[i].name} - ${a[i].num} -- ${a[i].stat}`);
        str += `<br>`;
        num++
        document.write(str);
    };
};

//pokupkiVid3(pokupkiFiltr(pokupki3(spisok3)));


// Task 2
// 2.1

let spisok_pokupok = [
    {
        name: `bread`,
        number: 1,
        price: 5,
    },
    {
        name: `apple`,
        number: 7,
        price: 3,
    },
    {
        name: `orange`,
        number: 5,
        price: 4,
    },
    {
        name: `yogurt`,
        number: 4,
        price: 6,
    },
    {
        name: `water`,
        number: 3,
        price: 2,
    },
    {
        name: `chips`,
        number: 1,
        price: 3,
    },
    {
        name: `pencil`,
        number: 3,
        price: 1,
    },
    {
        name: `shorts`,
        number: 1,
        price: 30,
    },
    {
        name: `aiphon`,
        number: 1,
        price: 150,
    },
    {
        name: `gum`,
        number: 2,
        price: 2,
    },
];

function chek(a) {
    let str = ``;
    let num = 1;
    for (let i = 0; i < a.length; i++) {
        str = (`${num}) ${a[i].name} --- ${a[i].number} * ${a[i].price} = ${a[i].number * a[i].price} `);
        str += `<br>`;
        num++
        document.write(str);
    };
};
chek(spisok_pokupok)

function itogo(a) {
    
    let itogo=0;
    for (let i = 0; i < a.length; i++) {
        itogo += a[i].number * a[i].price;
    };
    let str = (`Итого: ${itogo}p.`);
    let result = str.bold();

    document.write(result)
};

itogo(spisok_pokupok)

function bigPokupka(a) {

    let big = 0;
    for (let i = 0; i < a.length; i++) {
        if (big < (a[i].number*a[i].price)) {
            big = a[i].number*a[i].price;
        }; 
    };
    
    let samyy = a.filter(a => a.number*a.price == big);
   
    let str = (`Самая дорогая покупка: ${samyy[0].name} --- ${samyy[0].number} * ${samyy[0].price} p.`);
    let result = str.italics();
       
    document.write(result)
 
};
bigPokupka(spisok_pokupok)

function srPrice(a) {
    
    let result = Object.values(a.reduce((r, {name, number, price}) => {
        let bb = (r[name] || (r[name] = {name, num:0, count:0, price, get number() {
            return this.count/this.num;
        }
        }
        ));
        bb.num = bb.num+number;
        bb.count = bb.count+price;
        return r;
        
    }, 
    
    {}));
console.log(bb)
        console.log(result)
};

srPrice(spisok_pokupok)