import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  condition = false;
  view = true;

  logints=`
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
         
          //assgin the all fromControler fromControlerNames 
          this.loginForm=new FormGroup({
            username:new FormControl('',Validators.required),
            pwd:new FormControl('',Validators.required)
          });

        }

        login(data){
          if(data.username=='angular' && data.pwd=='11'){
            //as of now storing dummy data.
            localStorage.setItem('token',"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDI1NTM1NjcsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdCIsImF1ZCI6Imh0dHA6XC9cL2xvY2FsaG9zdCIsIm5iZiI6MTcwMjU1MzU2NywiZXhwIjoxNzAyNjM5OTY3LCJkYXRhIjp7InVzZXJuYW1lIjoiaHViYWRtaW4ifSwianRpIjoxfQ.UtpdltccC6MJdJybM5Yg-g3MT3dJiUrlPJHWGmLCBTY");
            this.router.navigateByUrl('auth');
          }else{
            console.log("tost")
          }
        }

      }

  `;

  loginhtml=`
        <div class="row background px-4 py-3">
          <div class="col-8 col-4 bg-success bg-opacity-50 text-center text-black ">

              <div class="text" style="margin: auto auto;padding-top: 30%;">
                  <h2 class="textAlignment">Angular</h2>
                  <br>
                  
                  <p>Login To Check Authonication</p>
              </div>

          </div>
          <div class="col-4 text-left py-20 pt-20" style="padding-top: 50px;">

              <h5 class="text-black header" >Well Come To My WebSite</h5>
              <h5 class="text-black header">Login To Angular </h5>
              <form  [formGroup]="loginForm" (ngSubmit)="login(loginForm.value)" >
                  <div class="form-group">
                      <label class="text-normal text-dark">UserName</label>
                      <input type="text" class="form-control" formControlName="username" [class.is-invalid]="loginForm.get('username').touched && loginForm.get('username').invalid"  [(ngModel)]="name">
                      <span *ngIf="loginForm.get('username').touched && loginForm.get('username').invalid" class="invalid-feedback">Please Enter Username</span>
                  </div>
                  <div class="form-group">
                      <label class="text-normal text-dark">Password</label>
                      <input type="password" class="form-control" formControlName="pwd" [class.is-invalid]="loginForm.get('pwd').invalid && loginForm.get('pwd').touched">

                      <span *ngIf="loginForm.get('pwd').touched && loginForm.get('pwd').invalid" class="invalid-feedback">Please Enter Password</span>
                  </div>

                
                      <!-- <div class="form-control"> -->
                          <button type="submit" class="btn btn-primary" style="margin-top: 20px;" >Submit</button>
                  
          
                </form>

                <!-- {{loginFrom.value | json}} -->




          </div>
      </div>
  `;

  authServicets=`
      import { Injectable } from '@angular/core';

        @Injectable({
          providedIn: 'root'
        })
        export class AuthService {
        isAuthonicated=false;
          constructor() { }

        checkAuthToken(){

            const token =localStorage.getItem('token');
            if(token){
              this.isAuthonicated=true;
            }else{
              this.isAuthonicated=false;
              console.log("token not found")
            }
            return this.isAuthonicated;
          }
        }

  `;

  authGuradts=`
      import { Injectable } from '@angular/core';
      import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
      import { Observable } from 'rxjs';
      import { AuthService } from './auth.service';

      @Injectable({
        providedIn: 'root'
      })
      export class AuthGuard implements CanActivate {
        constructor(
          private auth:AuthService,
          private router:Router
        ){
          
        }

        canActivate() {
          if(this.auth.checkAuthToken()){
            return true;
          }
          this.router.navigate['login'];
          return false;
        } 
      }
  `;

  approutingmodulets=`
  
    const routes: Routes = [
      {
        path:"",
        redirectTo:"sidebar",
        pathMatch: 'full'
      },
      {
        path:"login",
        component:LoginComponent,
      },
      {
        path:"auth",
        component:AuthenticationComponent,
      //  loadChildren: 'LoginComponent',
        canActivate:[AuthGuard]
      }
    ];
  `;

  display=false;

 copyText(val){
  console.log(val)
const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

   console.log(this.display)
   let codesinppetId=document.getElementById('codesinppet');
       codesinppetId.blur();

  }

  OnClick() {
    if(this.condition ==true ){
      this.condition = false;
    }else if(this.condition ==false){
      this.condition = true;
    }
    if(this.view==true){
      this.view=false;
    }else if(this.view==false){
      this.view=true
  
    }   
  }

}
