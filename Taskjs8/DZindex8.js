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

class HtmlElement {
  constructor(name, tegClose) {
    this.nameTeg = name;
    this.tegClose = tegClose;
    this.text = ``;
    this.arrAtribut=[];
    this.arrStyles=[];
    this.arrHtmlTegs=[];
  }; 

  SetAtribut2(_name, _value) {
    let tmpAttr = {
          name: _name,
          value: _value,
    };
    this.SetAtribut(tmpAttr);
  }

  SetAtribut(tmpAttr) {
    for(let i=0; i<this.arrAtribut.length; i++) {
      if (this.arrAtribut[i].name === tmpAttr.name) {
            this.arrAtribut[i].value = tmpAttr.value;
        return;
      }
    }
    this.arrAtribut.push(tmpAttr);
  }

  SetStyle2(_name, _value) {
    let tmpStyle = {
          name: _name,
          value: _value,
    };
    this.SetStyle(tmpStyle);
  }

  SetStyle(tmpStyle) {
    let newStyle = true;

    for(let i=0; i<this.arrStyles.length; i++) {
      if (this.arrStyles[i].name === tmpStyle.name) {
            this.arrStyles[i].value = tmpStyle.value;
            newStyle=false;
            break;
      }
    }
    if (newStyle) {
      this.arrStyles.push(tmpStyle);
    }
    let result = ``;
    for(let i=0; i<this.arrStyles.length; i++) {
      result += this.arrStyles[i].name +`: `+ this.arrStyles[i].value+`; `
    }
    this.SetAtribut2(`style`, result);
  }


  SetText(text) {
    this.text=text;
  }

  AddHtmlElementToEnd(element) {
    this.arrHtmlTegs.push(element)
  }

  AddHtmlElementToBegin(element) {
    this.arrHtmlTegs.unshifl(element)
  }

  getHtml() {
    let result=`<`+this.nameTeg+` `;
    for(let i=0; i<this.arrAtribut.length; i++) {
      result += this.arrAtribut[i].name +`="`+ this.arrAtribut[i].value+`" `;
    }
    if (this.tegClose) {
      result += `>`
      if (this.text){
        result += this.text;
      }
      for(let i=0; i<this.arrHtmlTegs.length; i++) {
        result += this.arrHtmlTegs[i].getHtml();  
      }
      result += `</`+this.nameTeg+`>`;
    } else {
      result += `>`
    }
    return result;
  }
};

arrAtribut = [
  {
    name: `id`,
    value: `wrapper`,
  },
  {
    name: `style`,
    value: ``,
  },
  {
    name: `src`,
    value: `lipsum.jpg`,
  },
  {
    name: `alt`,
    value: `Lorem Ipsum`,
  },
  {
    name: `href`,
    value: `https://www.lipsum.com/`,
  },
  {
    name: `target`,
    value: `_blank`,
  },
];

arrStyles = [
  {
    name: `display`,
    value: `flex`,
  },
  {
    name: `width`,
    value: `100%`,
  },
  {
    name: `width`,
    value: `300px`,
  },
  {
    name: `margin`,
    value: `10px`,
  },
  {
    name: `text-align`,
    value: `justify`,
  },
];

arrHtmlTegs = [`div`, `h3`, `p`, `a`, `img`,];

let text1 = `What is Lorem Ipsum?`;
let text2 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;
let text3 = `More...`

// let htmlElement = new HtmlElement(arrHtmlTegs[0], true)

// htmlElement.SetAtribut2(arrAtribut[0].name, arrAtribut[0].value)
// htmlElement.SetStyle2(arrStyles[0].name, arrStyles[0].value)

// let htmlElement2 = new HtmlElement(arrHtmlTegs[0], true)

// htmlElement2.SetStyle2(arrStyles[2].name, arrStyles[2].value)
// htmlElement2.SetStyle2(arrStyles[3].name, arrStyles[3].value)

// let htmlElement3 = new HtmlElement(arrHtmlTegs[1], true)

// htmlElement3.SetText(text1)

// let htmlElement4 = new HtmlElement(arrHtmlTegs[4], false)

// htmlElement4.SetStyle2(arrStyles[1].name, arrStyles[1].value)
// htmlElement4.SetAtribut(arrAtribut[2])
// htmlElement4.SetAtribut(arrAtribut[3])

// let htmlElement5 = new HtmlElement(arrHtmlTegs[2], true)

// htmlElement5.SetStyle2(arrStyles[4].name, arrStyles[4].value)
// htmlElement5.SetText(text2)

// let htmlElement6 = new HtmlElement(arrHtmlTegs[3], true)

// htmlElement6.SetAtribut(arrAtribut[4])
// htmlElement6.SetAtribut(arrAtribut[5])
// htmlElement6.SetText(text3)

// htmlElement5.AddHtmlElementToEnd(htmlElement6)
// htmlElement2.AddHtmlElementToEnd(htmlElement3)
// htmlElement2.AddHtmlElementToEnd(htmlElement4)
// htmlElement2.AddHtmlElementToEnd(htmlElement5)
// htmlElement.AddHtmlElementToEnd(htmlElement2)

// htmlElement.AddHtmlElementToEnd(htmlElement2)

// console.log(htmlElement.getHtml());
// document.write(htmlElement.getHtml());


// Task 3

class CssClass {
  constructor(nameCss) {
    this.nameCss=nameCss;
    this.arrStylesCss=[];
  }

  SetStyleCss2(_name, _value) {
    
    let tmpStyleCss = {
          name: _name,
          value: _value,
    };
    this.SetStyleCss(tmpStyleCss);
  }

  SetStyleCss(tmpStyleCss) {
    
    for(let i=0; i<this.arrStylesCss.length; i++) {
    if (this.arrStylesCss[i].name === tmpStyleCss.name) {
          this.arrStylesCss[i].value = tmpStyleCss.value;
          return;
      }
    }
    this.arrStylesCss.push(tmpStyleCss);
  }
 
  DeleteStyleCss(tmpStyleCss) {

    let count=0;
    for(let i=0; i<this.arrStylesCss.length; i++) {
      if (this.arrStylesCss[i].name === tmpStyleCss) {
            this.arrStylesCss.splice(count, 1);
            return;
        }
        count++;
      }
  }

  GetCss() {

    let result = `<style>`;
    
    if(this.nameCss) {
      result += ` .`+this.nameCss+` {`;
      for(let i=0; i<this.arrStylesCss.length; i++) {
        result += this.arrStylesCss[i].name +`: `+ this.arrStylesCss[i].value+`; `;
      }
      result+= `} `;
    }
    result+= `</style>`;

     return result;
  };

}

let arrStylesCss = [
  {
    name: `color`,
    value: `blue`,
  },
  {
    name: `font-size`,
    value: `18px`,
  },
  {
    name: `text-align`,
    value: `right`,
  },
  {
    name: `font-style`,
    value: `italic`,
  },
  {
    name: `text-decoration`,
    value: `overline`,
  },
  {
    name: `text-decoration-color`,
    value: `#808000`,
  },
]

let list = new CssClass(`text`)

list.SetStyleCss2(arrStylesCss[0].name, arrStylesCss[0].value)
list.SetStyleCss2(arrStylesCss[1].name, arrStylesCss[1].value)
list.SetStyleCss2(arrStylesCss[2].name, arrStylesCss[2].value)

//list.DeleteStyleCss(`text-align`)

console.log(list);

list.GetCss();

console.log(list.GetCss());

let list2 = new CssClass(`img`)

list2.SetStyleCss2(`width`, `100%`)

console.log(list2);
console.log(list.GetCss(),list2.GetCss());


list2.GetCss();


// Task 4




