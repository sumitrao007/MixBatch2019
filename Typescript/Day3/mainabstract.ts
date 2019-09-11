import {Abstractclass} from './myabstract';
export class circle extends Abstractclass{
    radius:number;
    cirlearea:number;
    constructor(radius:number){
        super();
        this.radius=radius;
    }
    area() {
        this.cirlearea=3.14*this.radius*this.radius;
    }
    display(){
        console.log(`area is ${this.cirlearea}`);
    }
    
}