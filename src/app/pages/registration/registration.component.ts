import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MediatorService } from 'src/app/services/mediator.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  http = inject(HttpClient)
  regForm = new FormGroup({
    first_name:new FormControl(),
    last_name:new FormControl(),
    username:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
  })
  validate(){
    console.log(this.regForm.value);
    this.s.registerUser(this.regForm.getRawValue()).subscribe((res)=>{
      console.log(res);
      this.route.navigate(['/login'])
    })
  }
  constructor(private route:Router,private s:MediatorService){

  }
}
