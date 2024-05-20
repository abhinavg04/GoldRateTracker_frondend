import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Chart ,registerables} from 'chart.js';
import { AuthService } from 'src/app/services/auth.service';
import { MediatorService } from 'src/app/services/mediator.service';

Chart.register(...registerables)
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{
  dateForm = new FormGroup({
    startDate: new FormControl('', Validators.required),
    endDate: new FormControl('', Validators.required)
  });
  priceData:any;
  akgsma_price:any[] = [];
  goldPrice:any[] = [];
  dateList:any[] = [];
  startDate:any;
  endDate:any;
  chart:any;
  onSubmit() {
    if (this.dateForm.valid) {
      this.chart.destroy();
      this.startDate = this.dateForm.value.startDate
      this.endDate = this.dateForm.value.endDate
      this.s.getGoldDateRate(this.startDate,this.endDate).subscribe(data=>{
        this.priceData = data;
        this.akgsma_price = this.priceData.filter((res:any)=>res.category == '22k')
        console.log(this.akgsma_price);
        
        this.goldPrice = this.akgsma_price.map((price:any)=>{
          return price.akgsma
        })
        this.dateList = this.akgsma_price.map((price:any)=>{
          return price.added_date
        })
        this.RenderChart(this.goldPrice,this.dateList)
      });
    }
  }
  constructor(public s:MediatorService){ }
  ngOnInit(): void {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDate = new Date(year, month, 1);
    firstDate.setDate(1);
    const lastDate = new Date(year, month + 1, 0); 

    const formattedFirstDate = firstDate.toISOString().slice(0, 10);
    const formattedLastDate = lastDate.toISOString().slice(0, 10);
    console.log(lastDate);
    
    // '2024-04-01','2024-04-22'
    this.s.getGoldDateRate(formattedFirstDate,formattedLastDate).subscribe(data=>{
      this.priceData = data;
      this.akgsma_price = this.priceData.filter((res:any)=>res.category == '22k')
      console.log(this.akgsma_price);
      
      this.goldPrice = this.akgsma_price.map((price:any)=>{
        return price.akgsma
      })
      this.dateList = this.akgsma_price.map((price:any)=>{
        return price.added_date
      })
      this.RenderChart(this.goldPrice,this.dateList)
    });
  }
  RenderChart(ydata:any[],xdata:any[]){
    this.chart = new Chart("linechart", {
      type: 'line',
      data: {
        labels: xdata,
        datasets: [{
          label: 'Gold rate in the date',
          data: ydata,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
