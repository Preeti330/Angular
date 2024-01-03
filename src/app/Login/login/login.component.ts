import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators ,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
//import {NgToastService} from 'ng-angular-popup'

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm  //declare formGroup
  name="";

  constructor(
    private fromBuilder: FormBuilder,
    private router:Router,
    private toastr: ToastrService
  //  private toast:NgToastService
  ) { 
   
  }

  ngOnInit(): void {
     //  this.loginForm=new FormControl('username')
    //  this.loginForm = this.fromBuilder.group({
    //   username:['',Validators.required],
    //   pwd:['',Validators.required]
    // })

    //assgin the all fromControler fromControlerNames 
    this.loginForm=new FormGroup({
      username:new FormControl('',Validators.required),
      pwd:new FormControl('',Validators.required)
    });

  }


  login(data){
    if(data.username=='angular' && data.pwd=='11'){
      //as of now storing dummy data.
     var token  =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDI1NTM1NjcsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdCIsImF1ZCI6Imh0dHA6XC9cL2xvY2FsaG9zdCIsIm5iZiI6MTcwMjU1MzU2NywiZXhwIjoxNzAyNjM5OTY3LCJkYXRhIjp7InVzZXJuYW1lIjoiaHViYWRtaW4ifSwianRpIjoxfQ.UtpdltccC6MJdJybM5Yg-g3MT3dJiUrlPJHWGmLCBTY";
      if(token){
        localStorage.setItem('token',token);
      }else{
        this.toastr.error("Access Token Not Found..!!")
        return
      }
      

      //this.toast.success({detail:"hiiii",summary:"hiii log"});
      this.toastr.success("Sucessfully Loged In ")
      this.router.navigateByUrl('auth');
    }else{
      this.toastr.error("Please Use Username : angular And Pwd : 11  to login")
    }
  }

}
