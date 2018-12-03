import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  private num1;
  private num2;
  private operator;

  constructor() { }

  ngOnInit() {
  }

  get answer() {
    if ( this.num1 && this.num2 && this.operator ) {
      // tslint:disable-next-line:no-eval
      return eval( parseFloat( this.num1 ) + this.operator + parseFloat( this.num2 ) );
    }
    return '';
  }

}