import { Component, OnInit } from '@angular/core';
import { MediatorService } from 'src/app/services/mediator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  today = new Date();
  year = this.today.getFullYear();
  month = String(this.today.getMonth() + 1).padStart(2, '0'); 
  day = String(this.today.getDate()).padStart(2, '0');
  formattedDate = `${this.year}-${this.month}-${this.day}`;
  currentRate:any;
  currentRate22k:any;
  currentRate24k:any;
  currentRate22kPavan:any = {
    akgsma:0,
    kjf:0,
    s_bhavan:0,
    kgsda:0,
    thrichur:0,
  };
  akgsma_rate:any;
  ngOnInit(){
    this.s.getGoldRate(this.formattedDate).subscribe(
      data=>{
        this.currentRate = data
        this.currentRate22k = this.currentRate.filter((price:any)=>price.category=="22k").pop()
        this.currentRate24k = this.currentRate.filter((price:any)=>price.category=='24k').pop()
        this.currentRate22kPavan.akgsma = this.currentRate22k.akgsma*8
        this.currentRate22kPavan.kjf = this.currentRate22k.kjf*8
        this.currentRate22kPavan.kgsda = this.currentRate22k.kgsda*8
        this.currentRate22kPavan.thrichur = this.currentRate22k.thrichur*8
        this.currentRate22kPavan.s_bhavan = this.currentRate22k.s_bhavan*8
        this.akgsma_rate = this.currentRate22k.akgsma; 
      })
  }
  constructor(private s:MediatorService){

  }

}
