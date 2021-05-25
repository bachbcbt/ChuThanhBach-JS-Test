// bài 1
document.write('<br>Bài 1:<br>')
var names=['Bách','Chiến','Hoàng','Sơn']
var para=' là học viên lớp C2006E'
function chooseName(name,par) {
    var rd=name[Math.floor(Math.random() * name.length)];
    document.write(rd+par+'<br>');
}
chooseName(names,para);

// bài 2

// function rectangle(x,y,width,height,color) {
// ctx.fillStyle=color
// ctx.fillRect(x,y,width,height)
// }
// rectangle(20,30,200,300,'#FF0000');

// bài 3
function random(a,b) {
    return Math.floor(Math.random()*(b-a+1))+a;
}

function selectName(name,par) {
    var rd=name[random(0,name.length-1)]
    document.write(rd+par+'<br>')
}
document.write('<br>Bài 3:<br>')
selectName(names,para)

//bài 4

class Shape {
    constructor(name,sides,sideLength) {
    this.name=name;
    this.sides=sides;
    this.sideLength=sideLength;
    }
    calcPerimeter() {
        console.log(this.sides*this.sideLength)
    }
}
console.log('Bài 4')
let square=new Shape('square',4,5)
square.calcPerimeter()
let triangle=new Shape('triangle',3,3)
triangle.calcPerimeter()

//bài 5
