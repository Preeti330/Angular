import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators ,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


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
    private router:Router
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
    if(data.username=='angular' && data.pwd=='P123456'){
      this.router.navigateByUrl('hero');
    }else{
      console.log("tost")
    }
  }

}
