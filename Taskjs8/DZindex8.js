// Task 1

// class Circle {
//     constructor() {
//         this._radius = 0;
//     }; 

//     get radius() {
//         return this._radius
//     }

//    set radius(value) {
//       this._radius = value;
//    }

//     get diameter() {
//       return this.radius*2;
//     } 
//     SCircle() {
//       return (Math.round(2*Math.PI*Math.pow(this.radius,2)*100)/100);
//     }
//     LCircle() {
//       return (Math.round(2*Math.PI*this.radius*100)/100);
//     }
// };
//  let c = new Circle();
//  c.radius = 12;

// console.log(`R=` + c.radius);
// console.log(`Diameter =`+ c.diameter);
// console.log(`Space = `+ c.SCircle());
// console.log(`Length = `+ c.LCircle());


// Task 2

//class HtmlElement {
  // constructor(nameTeg, text, ) {
  //   this.nameTeg = nameTeg;
  //   this.teg = Boolean;
  //   this.text = text;
    
  // }; 
    atribut = [
      {
        name: `id`,
        volume: `"wrapper"`,
      },
      {
        name: `style`,
        volume: ``,
      },
      {
        name: `src`,
        volume: `lipsum.jpg`,
      },
      {
        name: `alt`,
        volume: `Lorem Ipsum`,
      },
      {
        name: `href`,
        volume: `https://www.lipsum.com/`,
      },
      {
        name: `target`,
        volume: `_blank`,
      },
    ];
    arrStyle = [
      {
        name: `"display:`,
        volume: `flex;"`,
      },
      {
        name: `width`,
        volume: `100%`,
      },
      {
        name: `width`,
        volume: `300px`,
      },
      {
        name: `margin`,
        volume: `10px`,
      },
      {
        name: `text-align`,
        volume: `justify`,
      },
    ];
    HtmlTeg = [`div`, `h3`, `p`, `a`, `img`,];

//};


//document.write(HtmlTeg[0] +` `+ atribut[0].name + `=` +  atribut[0].volume + ` ` + atribut[1].name + `=` + arrStyle[0].name + ` ` + arrStyle[0].volume)
for (let i = 0; i < HtmlTeg.length; i++) {
        (HtmlTeg[i] !== `img`) ? console.log(`<${HtmlTeg[i]}>`+`</${HtmlTeg[i]}>`): console.log(`<${HtmlTeg[i]}>`);
 
     };

     document.write(HtmlTeg[0]) 


// let style = [
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
// ];
// let text = String(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic iure velit commodi quasi ut. Voluptatibus magni expedita est? Ipsam minus libero nam atque ipsa laborum illum pariatur ducimus fugiat!`)
// function styleText(s, t) {
//    document.write(t) 
//    let l = ``;
//    for (let i = 0; i < s.length; i++) {
//        l += `${s[i].name}`+`:`+ `${s[i].volume}`+`;`;
//    };
//    console.log(l)
//    result = `<p style="${l}">`+t+`</p>`;
//    document.write(result)  
// };
// styleText(style, text)