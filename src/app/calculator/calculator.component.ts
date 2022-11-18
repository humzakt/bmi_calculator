import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  height: number = 70;
  weight: number = 200;
  bmi: number = 0;
  result: string = '';

  calculateBMI() {
    this.bmi = (703 * this.weight) / this.height ** 2;

    this.checkResult();
  }

  checkResult() {
    if (this.bmi < 18.5) {
      this.result = 'Underweight';
    } else if (this.bmi >= 18.5 && this.bmi <= 24.9) {
      this.result = 'Normal';
    } else if (this.bmi >= 25 && this.bmi <= 29.9) {
      this.result = 'Overweight';
    } else if (this.bmi >= 30) {
      this.result = 'Obese';
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
