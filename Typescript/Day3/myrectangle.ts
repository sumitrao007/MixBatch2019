import {MyShape} from './mybaseclass2';

export class MyRectangle extends MyShape{
    length:number;
    breadth:number;
    rectarea:number;
constructor(l:number,b:number){
    super();
    this.length=l;
    this.breadth=b;
}
area(){
    this.rectarea=this.length*this.breadth;
}
display(){
    console.log(`
    ------------Area of Rectangle is -----------
        ${this.rectarea}
    `)
}

}