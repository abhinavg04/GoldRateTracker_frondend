import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../user-interface';

@Injectable({
  providedIn: 'root'
})
export class MediatorService {
  storeGoldPrice(data:number){
    return this.http.post(`http://127.0.0.1:8000/store-data/`,{price:data})
  }
  loginUser(data:{username:string | null,password:string | null}){
    return this.http.post<UserInterface>(`http://127.0.0.1:8000/api-user-login/`,data)
  }
  registerUser(data:any){
    return this.http.post(`http://127.0.0.1:8000/account/adduser/`,data)
  }
  getGoldRate(date:string){
    return this.http.get(`http://127.0.0.1:8000/goldrate?date=${date}`)
    // return fetch(`http://127.0.0.1:8000/goldrate?date=${date}`)
  }
  getGoldDateRate(start_date:string,end_date:string){
    return this.http.get(`http://127.0.0.1:8000/goldrate?start_date=${start_date}&end_date=${end_date}`)
  }

  getAllGoldRate(){
    // return fetch(`http://127.0.0.1:8000/goldrate/`)
    return this.http.get(`http://127.0.0.1:8000/goldrate/`)
  }
  constructor(private http:HttpClient) { }
}
