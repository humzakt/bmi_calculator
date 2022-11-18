import { Units } from './units';
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
  status: string = 'imperial';
  units: Units = {
    height: 'in',
    weight: 'lb',
  };

  calculateBMI() {
    let calculation = 0;
    if (this.height > 0 && this.weight > 0) {
      if (this.status === 'imperial') {
        calculation = (703 * this.weight) / this.height ** 2;
      } else {
        calculation = this.weight / (this.height / 100) ** 2;
      }
      this.bmi = Number(calculation.toFixed(2));
    } else {
      this.bmi = -1;
    }
    this.checkResult();
  }

  changeUnits() {
    if (this.units.height === 'in') {
      this.status = 'metric';
      this.units.height = 'cm';
      this.units.weight = 'kg';
    } else {
      this.status = 'imperial';
      this.units.height = 'in';
      this.units.weight = 'lb';
    }
  }

  checkResult() {
    switch (true) {
      case this.bmi < 0:
        this.result = 'Invalid Input';
        break;
      case this.bmi < 18.5:
        this.result = 'Underweight';
        break;
      case this.bmi >= 18.5 && this.bmi <= 24.9:
        this.result = 'Normal';
        break;
      case this.bmi >= 25 && this.bmi <= 29.9:
        this.result = 'Overweight';
        break;
      case this.bmi >= 30:
        this.result = 'Obese';
        break;
      default:
        this.result = 'Invalid Input';
        break;
    }
    // if (this.bmi < 18.5) {
  }

  constructor() {}

  ngOnInit(): void {}
}
