import { Component, OnInit, Input } from '@angular/core';
import { Button } from 'src/app/model/button';
import { CalculatorService } from 'src/app/Service/calculator.service';

@Component({
  selector: 'app-calc-header',
  templateUrl: './calc-header.component.html',
  styleUrls: ['./calc-header.component.css']
})
export class CalcHeaderComponent implements OnInit {

  _label ='';
   private _values:Button[]=[];
  @Input() set incomigValue(value:Button){


    if(!value || value==null)
      return;
    if(this._values.length==0 && (value.type!="number" || value.title=="0"))
      return;
    if(value.type=="operator" && this._values[this._values.length-1].type=="operator")
      return;
    if(this._values.length>0 &&
      this._values[this._values.length-1].type=="operator" &&
      value.title=="0")
    return;

    if(value.type=="other" && value.title=="delete"){
      this._values.pop();
      this.setText();
    }
    else if(value.type=='perform')
      this.perform();
    else{
      this._values.push(value);
      this.setText();
    }


  }
  constructor(public calculatorService:CalculatorService) { }

  ngOnInit(): void {
  }

  setText(){
    this._label='';
    this._values.forEach(element => {
    if(element.type!="perform" && element.type!="other")
      this._label+=element.title;
    });
  }

  perform(){
    let temp1str='0';
    let temp2str='0';
    let temp1:number;
    let temp2:number;
    let operator='';
    this._values.forEach(element => {
      if(element.type=="number" && operator=='')
        temp1str+=element.title;
      else if(element.type=="operator")
        operator=element.title;
      else if(element.type=="number" && operator!='')
        temp2str+=element.title;
    });
    temp1=Number.parseInt(temp1str);
    temp2=Number.parseInt(temp2str);
    switch(operator){
      case '*':
        this._label=(temp1*temp2).toString();
        break;
      case '/':
        this._label=(temp1/temp2).toString();
        break;
      case '+':
        this._label=(temp1+temp2).toString();
        break;
      case '-':
        this._label=(temp1-temp2).toString();
        break;
    }
    if(operator!=''){
      this._values=[];
      for(var i=0;i<this._label.length;i++){
        let btn:Button={type:"number",title:this._label.substr(i,1)};
        this._values.push(btn);
      }
      this.setText();
    }
  }

}
