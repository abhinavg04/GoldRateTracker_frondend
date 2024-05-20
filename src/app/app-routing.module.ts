import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserpageComponent } from './pages/userpage/userpage.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'history',component:HistoryComponent},
  {path:'home',component:HomeComponent},
  {path:'reg',component:RegistrationComponent},
  {path:'user',component:UserpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
