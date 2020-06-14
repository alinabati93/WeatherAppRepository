import { Injectable } from '@angular/core';
import { Button } from '../model/button';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  label:string="";
  private _values:Button[]=[];
  constructor() { }

  addNumber(btn:Button){
    let value=Number.parseInt( btn.title);
    if(this._values.length==0 && value==0)
      return;
    if(this._values.length>0 && this._values[this._values.length-1].type=="operator" && value==0)
      return;
    this._values.push(btn);
    this.setText();
  }

  addOperator(btn:Button){
    let value=btn.title;
    if(this._values.length==0 || this._values[this._values.length-1].type=="operator")
      return;

    this._values.push(btn);
    this.setText();
  }

  delete(){
    this._values.pop();
    this.setText();
  }

  setText(){
    this.label='';
    this._values.forEach(element => {
    if(element.type!="perform" && element.type!="other")
      this.label+=element.title;
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
        this.label=(temp1*temp2).toString();
        break;
      case '/':
        this.label=(temp1/temp2).toString();
        break;
      case '+':
        this.label=(temp1+temp2).toString();
        break;
      case '-':
        this.label=(temp1-temp2).toString();
        break;
    }
    if(operator!=''){
      this._values=[];
      for(var i=0;i<this.label.length;i++){
        let btn:Button={type:"number",title:this.label.substr(i,1)};
        this._values.push(btn);
      }
      this.setText();
    }
  }
}
