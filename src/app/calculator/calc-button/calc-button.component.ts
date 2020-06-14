import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Button } from 'src/app/model/button';
import { title } from 'process';
import { CalculatorService } from 'src/app/Service/calculator.service';

@Component({
  selector: 'app-calc-button',
  templateUrl: './calc-button.component.html',
  styleUrls: ['./calc-button.component.css']
})
export class CalcButtonComponent implements OnInit {

  @Output() onClicked=new EventEmitter<Button>();

  // numberButtons:number[]=[1,2,3,4,5,6,7,8,9,0];
  calcButtons:Button[]=[];
  constructor(private calculaorService:CalculatorService) {
    let btnCE:Button = {
      title:"CE",
      type:"other"
    }
    this.calcButtons.push(btnCE);

    let btnC:Button = {
      title:"C",
      type:"other"
    }
    this.calcButtons.push(btnC);

    let btnDelete:Button = {
      title:"delete",
      type:"other"
    }
    this.calcButtons.push(btnDelete);

    let btnDivision:Button = {
      title:"/",
      type:"operator"
    }
    this.calcButtons.push(btnDivision);

    let btn7:Button = {
      title:"7",
      type:"number"
    }
    this.calcButtons.push(btn7);

    let btn8:Button = {
      title:"8",
      type:"number"
    }
    this.calcButtons.push(btn8);

    let btn9:Button = {
      title:"9",
      type:"number"
    }
    this.calcButtons.push(btn9);

    let btnMultiply:Button = {
      title:"*",
      type:"operator"
    }
    this.calcButtons.push(btnMultiply);

    let btn4:Button = {
      title:"4",
      type:"number"
    }
    this.calcButtons.push(btn4);

    let btn5:Button = {
      title:"5",
      type:"number"
    }
    this.calcButtons.push(btn5);

    let btn6:Button = {
      title:"6",
      type:"number"
    }
    this.calcButtons.push(btn6);

    let btnMinus:Button = {
      title:"-",
      type:"operator"
    }
    this.calcButtons.push(btnMinus);

    let btn1:Button = {
      title:"1",
      type:"number"
    }
    this.calcButtons.push(btn1);

    let btn2:Button = {
      title:"2",
      type:"number"
    }
    this.calcButtons.push(btn2);

    let btn3:Button = {
      title:"3",
      type:"number"
    }
    this.calcButtons.push(btn3);

    let btnPlus:Button = {
      title:"+",
      type:"operator"
    }
    this.calcButtons.push(btnPlus);

    let btnZZ:Button = {
      title:"......",
      type:"other"
    }
    this.calcButtons.push(btnZZ);

    let btn0:Button = {
      title:"0",
      type:"number"
    }
    this.calcButtons.push(btn0);

    let btnZZZ:Button = {
      title:".....",
      type:"other"
    }
    this.calcButtons.push(btnZZZ);

    let btnPerform:Button = {
      title:"=",
      type:"perform"
    }
    this.calcButtons.push(btnPerform);

  }

  ngOnInit(): void {
  }

  onCalcButtonClick(btn:Button){
    this.onClicked.emit(btn);

    switch(btn.type){
      case "number":
        this.calculaorService.addNumber(btn);
        break;
      case "operator":
        this.calculaorService.addOperator(btn);
        break;
      case "perform":
        this.calculaorService.perform();
        break;
      case "other":
        if(btn.title=="delete")
          this.calculaorService.delete();
        break;
    }

    //console.log(btn.title);
  }

}

