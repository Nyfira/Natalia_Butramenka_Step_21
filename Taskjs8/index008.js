// Task 1
// class PrintMashine {
//     constructor(color, fontSize, fontFamily, text) {
//       this.color=color; 
//       this.fontSize=fontSize; 
//       this.fontFamily=fontFamily; 
//       this.text=text;
//     };
//     print(text) {
//       document.write(`<p style="color:${this.color};>${text}</p>`);
//     };
// };
// let print = new PrintMashine(`red`, `24px`, `cursive`);
// let print2 = new PrintMashine(`green`, `17px`, `italyc`);

// print.print(`hjuluiturt`);
// print2.print(`2325469790`);

// Task 2

// class CreateNews {
//     constructor(header, text, tags, date) {
//       this.header=header; 
//       this.text=text;
//       this.tags=tags;
//       this.date=date;
//     };

//  tagsFormation() {
//    this.tags = this.tags.map(tag =>`#`+tag);
//    this.tags = this.tags.join(` `);
//  };

//  dateFormation() {
//     if ( this.date.getDate() === new Date().getDate()&&this.date.getMonth()===new Date().getMonth()) {
//         this.date = `сегодня`;
//     } else if ((new Date().getDate() - this.date.getDate()) < 7) {
//          this.date =`${new Date().getDate() - this.date.getDate()} дней назад`;
//     } else {
//          this.date =`${this.date.getDate()}:${this.date.getMonth()}:${this.date.getFullYear()}`;
//     };
//  };

//  print() {
//     document.write(`<h1>${this.header}</h1>`);
//     document.write(`<div>${this.date}</div>`);
//     document.write(`<div>${this.text}</div>`);
//     document.write(`<div>${this.tags}</div>`);
//  };
// };

// let news = new CreateNews(`What news?`, `ggdsssgigihp;  gy4354521`, [`mapp`, `lena`, `car`,], new Date(2021, 8, 3));
// news.tagsFormation();
// news.dateFormation();
// news.print();

// Task 3

class CreateNews2 {
    constructor(header, text, tags, date) {
      this.header=header; 
      this.text=text;
      this.tags=tags;
      this.date=date;
    };




 tagsFormation() {
   this.tags = this.tags.map(tag =>`#`+tag);
   this.tags = this.tags.join(` `);
 };

 dateFormation() {
    if ( this.date.getDate() === new Date().getDate()&&this.date.getMonth()===new Date().getMonth()) {
        this.date = `сегодня`;
    } else if ((new Date().getDate() - this.date.getDate()) < 7) {
         this.date =`${new Date().getDate() - this.date.getDate()} дней назад`;
    } else {
         this.date =`${this.date.getDate()}:${this.date.getMonth()}:${this.date.getFullYear()}`;
    };
 };

 print() {
    document.write(`<h1>${this.header}</h1>`);
    document.write(`<div>${this.date}</div>`);
    document.write(`<div>${this.text}</div>`);
    document.write(`<div>${this.tags}</div>`);
 };
};

let news = [
 news1 = new CreateNews2(`What news?`, `ggdsssgigihp;  gy4354521`, [`mapp`, `lena`, `car`,], new Date(2021, 8, 3)),
 news2 = new CreateNews2(`What news?`, `ggdsssgigihp;  gy4354521`, [`mapp`, `lena`, `car`,], new Date(2021, 8, 3)),
 news3 = new CreateNews2(`What news?`, `ggdsssgigihp;  gy4354521`, [`mapp`, `lena`, `car`,], new Date(2021, 8, 3)),
 news4 = new CreateNews2(`What news?`, `ggdsssgigihp;  gy4354521`, [`mapp`, `lena`, `car`,], new Date(2021, 8, 3)),
 news5 = new CreateNews2(`What news?`, `ggdsssgigihp;  gy4354521`, [`mapp`, `lena`, `car`,], new Date(2021, 8, 3)),
];
news.tagsFormation();
news.dateFormation();
news.print();



