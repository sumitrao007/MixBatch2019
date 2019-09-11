import {MyShape} from './mybaseclass2'

export class Mycircle extends MyShape
{
    radius:number;
    circleare:number;

    constructor(radius:number){
        super();
        this.radius=radius
    }

    area(){
    this.circleare=3.14*this.radius*this.radius;
    }
    display(){
        console.log(`
        ----------Area of Circle is ------------------
                    ${this.circleare}


        `);
    }


}