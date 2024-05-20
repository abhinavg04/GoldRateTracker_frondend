import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  @Input() akgsmaRate:any;
  goldForm = new FormGroup({
    weight:new FormControl(),
    makingCharge:new FormControl(),
  }) 
  result:number = 0;
  calculateGoldPrice(){
    console.log(this.goldForm.value);
    console.log(this.akgsmaRate);
    
    this.result =this.goldForm.value.weight*this.akgsmaRate + this.goldForm.value.makingCharge*this.akgsmaRate/100
  }

}
