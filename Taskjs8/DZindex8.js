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

  GetHtml() {
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
        result += this.arrHtmlTegs[i].GetHtml();  
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

// htmlElement.GetHtml();
// console.log(htmlElement.GetHtml());
// document.write(htmlElement.GetHtml());


// Task 3

class CssClass {
  constructor(nameCss) {
    this.nameCss=nameCss;
    this.arrStylesCss=[];
  }

  SetStyleCss2(_name, _paramName, _value) {
    
    let tmpStyleCss = {
          name: _name,
          paramName: _paramName,
          value: _value,
    };
    this.SetStyleCss(tmpStyleCss);
  }

  SetStyleCss(tmpStyleCss) {
    let tmpParams = {
        name: tmpStyleCss.paramName,
        value:  tmpStyleCss.value,
      };

    for(let i=0; i<this.arrStylesCss.length; i++) 
    {
      if (this.arrStylesCss[i].name === tmpStyleCss.name) 
      {
        for(let j=0; j < this.arrStylesCss[i].params.length; j++) 
        {
          if (this.arrStylesCss[i].params[j].name === tmpParams.name)
          {
            this.arrStylesCss[i].params[j].value = tmpParams.value;
            return;
          }
        }

        this.arrStylesCss[i].params.push(tmpParams);
        return;
      }
    }

    let tmpStyle = {
      name: tmpStyleCss.name,
      params: [tmpParams]
    };

    this.arrStylesCss.push(tmpStyle);
  }
 
  DeleteStyleCss(tmpStyleCss) {

    let count=0;
    for(let i=0; i < this.arrStylesCss.length; i++) {
      if (this.arrStylesCss[i].name === tmpStyleCss) {
            this.arrStylesCss.splice(count, 1);
            return;
        }
        count++;
      }
  }

  GetCss() {

    let result = `<style>`;
    
    if(this.arrStylesCss) {

      for(let i=0; i < this.arrStylesCss.length; i++) {
        result += ` .`+this.arrStylesCss[i].name+` {`;
        for(let j=0; j < this.arrStylesCss[i].params.length; j++) 
        {
          result += this.arrStylesCss[i].params[j].name + `: `+ this.arrStylesCss[i].params[j].value + `; `;
        }
        result+= `} `;
      }

    }
    result+= `</style>`;

     return result;
  };

}
 
// let style = new CssClass(`lol`);

// style.SetStyleCss2(`text`, `color`, `blue`);
// style.SetStyleCss2(`text`, `font-size`, `18px`);
// style.SetStyleCss2(`text`, `text-align`, `right`);

// style.SetStyleCss2(`img`, `width`, `100%`);

// style.DeleteStyleCss(`img`);
// console.log(style.GetCss());


// Task 4

class HtmlBlock {
  constructor(styleCss, htmlElement) {
    this.styleCss = styleCss;
    this.htmlElement = htmlElement;

  }

  GetCode()
  {
     return  this.styleCss.GetCss() + this.htmlElement.GetHtml();
  }
}

let styleCss = new CssClass(`style`);

styleCss.SetStyleCss2(`wrap`, `display`, `flex`);
styleCss.SetStyleCss2(`block`, `width`, `300px`);
styleCss.SetStyleCss2(`block`, `margin`, `10px`);
styleCss.SetStyleCss2(`img`, `width`, `100%`);
styleCss.SetStyleCss2(`text`, `text-align`, `justify`);
styleCss.GetCss();

console.log(styleCss.GetCss());

let htmlElementDiv = new HtmlElement(`div`, true);

htmlElementDiv.SetAtribut2(`id`, `wrapper`);
htmlElementDiv.SetAtribut2(`class`, `wrap`);

let htmlElementDiv1 = new HtmlElement(`div`, true);

htmlElementDiv1.SetAtribut2(`class`, `block`);

let htmlElementH = new HtmlElement(`h3`, true);

htmlElementH.SetText(text1);

let htmlElementImg = new HtmlElement(`img`, false);

htmlElementImg.SetAtribut2(`class`, `img`);
htmlElementImg.SetAtribut2(`src`, `lipsum.jpg`);
htmlElementImg.SetAtribut2(`alt`, `Lorem Impus`);

let htmlElementP = new HtmlElement(`p`, true);

htmlElementP.SetAtribut2(`class`, `text`);
htmlElementP.SetText(text2);

let htmlElementA = new HtmlElement(`a`, true); 

htmlElementA.SetAtribut2(`href`, `https://www.lipsum.com/`);
htmlElementA.SetAtribut2(`target`, `_blank`);
htmlElementA.SetText(text3);

htmlElementP.AddHtmlElementToEnd(htmlElementA);
htmlElementDiv1.AddHtmlElementToEnd(htmlElementH);
htmlElementDiv1.AddHtmlElementToEnd(htmlElementImg);
htmlElementDiv1.AddHtmlElementToEnd(htmlElementP);

htmlElementDiv.AddHtmlElementToEnd(htmlElementDiv1);

htmlElementDiv.AddHtmlElementToEnd(htmlElementDiv1);

htmlElementDiv.GetHtml()

console.log(htmlElementDiv.GetHtml())

let htmlBlok = new HtmlBlock(styleCss, htmlElementDiv);

document.write(htmlBlok.GetCode());




