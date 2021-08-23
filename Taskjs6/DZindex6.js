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
        status: `not buy`, 
    },
    {
        name: `water`,
        number: 3,
        status: `buy`, 
    },
];

let spisok3 = newSpisok(spisok2New, paket3)

console.log(spisok3)

pokupkiFiltr(spisok3)




function pokupki3 (a) {
    
    let result = Object.values(a.reduce((r, {name, number, status}) => {
        let bb = (r[name] || (r[name] = {name,  num, get status() {
            }
        }
        ));
        if (bb.status)
        bb.num = bb.num+number;
        bb.count++
        return r;
    }, 
    {}));

    function delCount(a) {
        
    };
    delCount(result)
return result;
    
};

pokupki3(spisok3)
console.log(pokupki3(spisok3))