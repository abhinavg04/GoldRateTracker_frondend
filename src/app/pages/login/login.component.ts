import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MediatorService } from 'src/app/services/mediator.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username:new FormControl(),
    password: new FormControl(),
  })
  s = inject(MediatorService)
  route = inject(Router)
  authService = inject(AuthService)
  token:string='';
  validate() {
    console.log(this.loginForm.value);
    
    this.s.loginUser(this.loginForm.getRawValue()).subscribe((res)=>{
      console.log(res);
      this.token = `Token ${res.token}` 
      localStorage.setItem('token',this.token)
      this.authService.currentUsersig.set(res) 
      this.route.navigateByUrl('/reg')
    })
  }
}
