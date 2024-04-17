class Shape {
  constructor(width, height) {
    if (this.constructor == Shape) {
      throw "this is an abstract class";
    }
    this.width = width;
    this.height = height;
  }
  areaCalc() {
    return this.width * this.height;
  }
  perimeterCal() {
    return 2 * (this.width + this.height);
  }
  displayInfo() {
    console.log(
      `the height is ${this.height}, the width is ${
        this.width
      }, the area is ${this.areaCalc()}, the perimter is ${this.perimeterCal()}`
    );
  }
  toString() {
    console.log(`width is ${this.width}, height is ${this.height}`);
  }
  valueOf() {
    return this.areaCalc();
  }
}

class Rectangle extends Shape {
  static reqcounter = 0;

  constructor(width, height) {
    super(width, height);
    if (this.constructor == Rectangle) {
      if (Rectangle.reqcounter >= 1) {
        throw "you can only create one reqtangle";
      } else {
        Rectangle.reqcounter++;
      }
    }
  }
}

class Square extends Rectangle {
  static counter = 0;
  constructor(width, height) {
    super(width, height);
    Square.counter++;
  }
  areaCalc() {
    return this.width * this.width;
  }
  perimeterCal() {
    return 4 * this.width;
  }
}

// var rec = new Rectangle(5, 6);
// rec.displayInfo();

var sq = new Square(3, 3);
sq.displayInfo();

var sq1 = new Square(3, 3);
var sq2 = new Square(3, 3);
var sq3 = new Square(3, 3);
var sq4 = new Square(3, 3);

console.log(Square.counter);
sq1.toString();

// console.log(sq1 + sq2);
var req1 = new Rectangle(5, 6);
// var req2 = new Rectangle(5, 6);
// var req3 = new Rectangle(5, 6);
// var req2 = new Rectangle(5, 6);
// var req3 = new Rectangle(5, 6);
