import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isAuthonicated=false;
  constructor( private toastr: ToastrService) { }

 checkAuthToken(){

    const token =localStorage.getItem('token');
    if(token){
       this.isAuthonicated=true;
    }else{
      this.isAuthonicated=false;
      // console.log("token not found")
      this.toastr.error("Access Token Not Found...!!!")
    }

    return this.isAuthonicated;

  }


}
