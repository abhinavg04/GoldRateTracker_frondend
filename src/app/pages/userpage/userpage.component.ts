import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MediatorService } from 'src/app/services/mediator.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {
  authUser = inject(AuthService)
  s = inject(MediatorService)
  dataForm = new FormGroup({
    price:new FormControl()
  })
  storeData(){
    console.log(this.dataForm.value.price);
    
    this.s.storeGoldPrice(this.dataForm.value.price).subscribe(res=>{
      console.log(res);
    })
  }

}
