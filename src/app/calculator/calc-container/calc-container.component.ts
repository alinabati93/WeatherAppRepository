import { Component, OnInit } from '@angular/core';
import { Button } from 'src/app/model/button';
import { CalculatorService } from 'src/app/Service/calculator.service';

@Component({
  selector: 'app-calc-container',
  templateUrl: './calc-container.component.html',
  styleUrls: ['./calc-container.component.css']
})
export class CalcContainerComponent implements OnInit {

  valueFromButton:Button;
  constructor(private calculatorService:CalculatorService) { }

  ngOnInit(): void {
  }

  onClicked(btn:Button){
    //console.log(btn.title);
    this.valueFromButton=btn;
  }
}
