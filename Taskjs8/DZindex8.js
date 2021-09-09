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

// //class HtmlElement {
//   // constructor(nameTeg, text, ) {
//   //   this.nameTeg = nameTeg;
//   //   this.teg = Boolean;
//   //   this.text = text;
    
//   // }; 
//     atribut = [
//       {
//         name: `id`,
//         volume: `wrapper`,
//       },
//       {
//         name: `style`,
//         volume: ``,
//       },
//       {
//         name: `src`,
//         volume: `lipsum.jpg`,
//       },
//       {
//         name: `alt`,
//         volume: `Lorem Ipsum`,
//       },
//       {
//         name: `href`,
//         volume: `https://www.lipsum.com/`,
//       },
//       {
//         name: `target`,
//         volume: `_blank`,
//       },
//     ];
//     arrStyle = [
//       {
//         name: `display`,
//         volume: `flex`,
//       },
//       {
//         name: `width`,
//         volume: `100%`,
//       },
//       {
//         name: `width`,
//         volume: `300px`,
//       },
//       {
//         name: `margin`,
//         volume: `10px`,
//       },
//       {
//         name: `text-align`,
//         volume: `justify`,
//       },
//     ];
//     HtmlTeg = [`div`, `h3`, `p`, `a`, `img`,];
// let text1 = `What is Lorem Ipsum?`;
// let text2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
// let text3 = `More...`
// //};

// let str = [
//   (HtmlTeg[0]+` `+ atribut[0].name + `="` +  atribut[0].volume + `" ` + atribut[1].name + `="` + arrStyle[0].name + `: ` + arrStyle[0].volume+`;"`),
//   (HtmlTeg[0]+` `+ atribut[1].name + `="` + arrStyle[2].name + `: ` + arrStyle[2].volume +`; `+ arrStyle[3].name + `: ` + arrStyle[3].volume+`;"`),
//   (HtmlTeg[1]), // text1
//   (HtmlTeg[4]+` `+ atribut[1].name + `="` + arrStyle[1].name + `: ` + arrStyle[1].volume +`" `+ atribut[2].name + `="` +  atribut[2].volume + `" `+ atribut[3].name + `="` +  atribut[3].volume + `"`),
//   (HtmlTeg[2]+` `+ atribut[1].name + `="` + arrStyle[4].name + `: ` + arrStyle[4].volume +`;"`),  // text2
//   (HtmlTeg[3]+` `+ atribut[4].name + `="` +  atribut[4].volume + `" `+ atribut[5].name + `="` +  atribut[5].volume + `"`),  // text3
// ];

// for (let i = 0; i < str.length; i++) {
//       console.log(str[i]);
// };

// console.log(`--------------------------------`);

// let strText = [
//   (`<${str[2]}>`+text1+`</${b=str[2].split(` `),b[0]}>`),
//   (`<${str[3]}>`),
//   (`<${str[4]}>`+text2+`<${str[5]}>`+text3+`</${b=str[5].split(` `),b[0]}>`+`</${b=str[4].split(` `),b[0]}>`),
// ]

// for (let i = 0; i < strText.length; i++) {
//   console.log(strText[i]);
// };
// console.log(`--------------------------------`);
// console.log(strText)
// console.log(`--------------------------------`);

// let strDiv = [
//   (`<${str[1]}>`+strText+`</${b=str[1].split(` `),b[0]}>`),
//   (`<${str[1]}>`+strText+`</${b=str[1].split(` `),b[0]}>`),
// ]
// console.log(strDiv)
// console.log(`--------------------------------`);

// let finish = [
//   (`<${str[0]}>`+strDiv+`</${b=str[0].split(` `),b[0]}>`),
// ]
// console.log(finish)
// console.log(`--------------------------------`);

// document.write(finish)

// Task 3

class CssClass {
  constructor(name,) {
    this.name=name;
  }
  
}
