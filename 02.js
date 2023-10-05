//* Створіть клас "Rectangle", який має дві властивості "width" та "height" та два методи "getArea" (отримати площу прямокутника)та "getPerimeter" (отримати периметр прямокутника). Використайте гетери для доступу до властивостей та сетери для присвоєння ширини та висоти.

class Rectangle {
    constructor(width, height) {
      this._width = width;
      this._height = height;
    }
    getArea() {
      return this._width * this.height;
    }
    getPerimeter() {
      return (this._width + this.height) * 2;
    }
    get width() {
      return this._width;
    }
    set width(newWidth) {
      this._width = newWidth;
    }
    get height() {
      return this._height;
    }
    set height(newHeight) {
      this._height = newHeight;
    }
  }
  
  const myRectangle = new Rectangle(5, 7);
  
  console.log(myRectangle.getArea()); // Output: 35
  console.log(myRectangle.getPerimeter()); // Output: 24
  console.log(myRectangle.width); // Output: 5
  console.log(myRectangle.height); // Output: 7
  myRectangle.width = 10;
  myRectangle.height = 12;
  console.log(myRectangle.width); // Output: 10
  console.log(myRectangle.height); // Output: 12