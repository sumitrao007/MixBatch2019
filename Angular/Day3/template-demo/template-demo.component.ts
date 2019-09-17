import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-demo',
  templateUrl: './template-demo.component.html',
  styleUrls: ['./template-demo.component.css']
})
export class TemplateDemoComponent implements OnInit {

  Name:string="";
  constructor() { }

  ngOnInit() {
  }
  onClick(value){
    console.log(value);
    this.Name=value
  }

  onShowColor(divtemp){
    divtemp.style.background='red';

  }

  onShowColor1(divtemp1){

    divtemp1.style.backgroundImage="url('../../assets/Desert.jpg')";
    
  }


}
