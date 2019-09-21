import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "summary"
})

export class CustomPipe implements PipeTransform
{
    transform(value: any, lowerlimit?:number,upperlimit?:number) {

        if(!value){
            return null;
        }


        let temp=<string> value;

        let actuallimit=(upperlimit)?upperlimit:50;
        let lower=(lowerlimit)?lowerlimit:0;

        return temp.substring(lower,actuallimit)+"...";
        
    }

}