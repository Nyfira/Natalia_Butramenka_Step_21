// Task 001
// class Button {
//     constructor(width, higth, text) {
//         this.text = `Button`;
//         this.heigth = `100px`;
//         this.width = `200px`;
//     };
//     showBut() {
//         let button = document.createElement(`button`);
//         button.id = `qwe`;
//         console.log(button);
//         button.innerHTML=this.text;
//         document.body.append(button);
//         button.style.heigth=this.heigth;
//         button.style.width=this.width;
    
//         //document.write(`<button id ='btn' style= "heigth:${this.higth}; width ${this.width}" >${this.text}</button>`)
//     } 
//     hideBtn() {
//         let element = document.querySelector(`#btn`);
//         element.style.backgroundColor="red";
//     }
// }
 
// let btn = new Button();

// class Button1 extends Button {
//     constructor() {
//       super();
//       this.color= `red`;  
//     }
//     showBtn() {
//         document.write(`<button style= "heigth:${this.higth}; width ${this.width}; background-color:${this.color}" >${this.text}</button>`)
//     }
// }

// let btn1 = Button1();

// Task 2

class Figura {
   
    constructor(name) {
       this.name=name;
    }
    get getNameFig() {
       return this.name;
    }
    showInfo() {
        document.write(`Informaciy o figure`);
    }
    Per() {
        document.write(`Perimetr: `);
    }
    Spa() {
        document.write(`Space: `);
    }
}
 
class Square extends Figura{
    
    constructor() {
        super();
        this.long = 5;
    }
    
    Info() {
        super.showInfo();
        document.write(` Square; Storony: 4; Long = ${this.long}sm. `);
    }
    space() {
        super.Spa();
        document.write(this.long*this.long);
    }
    perimetr() {
        super.Per();
        document.write(this.long*4);
    }
}
let a = new Square()

class Rectangle extends Figura{

    constructor() {
        super();
        this.longA = 5;
        this.longB = 10;
    }
    
    Info() {
        super.showInfo();
        document.write(` Rectangle; Storony: 4; LongA = ${this.longA}sm, LongB = ${this.longB}sm. `)
    };
    space() {
        super.Spa();
        document.write(this.longA*this.longB);
    }
    perimetr() {
        super.Per();
        document.write((this.longA+this.longB)*2);
    }
}
let b = new Rectangle()

class Triangle extends Figura{

    constructor() {
        super();
        this.longA = 5;
        this.longB = 10;
        this.longC = 7;
    }
    
    Info() {
        super.showInfo();
        document.write(`Triangle; Storony: 3; LongA = ${this.longA}sm, LongB = ${this.longB}sm, LongC = ${this.longC}sm. `)
    };
    space() {
        super.Spa();
        let p =(this.longA+this.longB+this.longC)/2;
        document.write(Math.round(Math.sqrt(p*(p-this.longA)*(p-this.longB)*(p-this.longC))));
    }
    perimetr() {
        super.Per();
        document.write(this.longA+this.longB+this.longC);
    }
}
let c = new Triangle()

let arr = [
    {
        name:`Square`,
        long:7,
    } 
];