import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  condition = false;
  view = true;

  constructor() { }

  ngOnInit(): void {
  }

  factory=`
    "styles": [
      "styles.scss",
      "node_modules/ngx-toastr/toastr.css" // try adding '../' if you're using angular cli before 6
    ]
  `;

  logints=`
      import { Component, OnInit } from '@angular/core';
      import { FormBuilder, FormControl, FormGroup, Validator, Validators ,ReactiveFormsModule } from '@angular/forms';
      import { Router } from '@angular/router';
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
            //this.toast.success(res.message);
            this.toastr.success("Sucessfully Loged In ")
            this.router.navigateByUrl('auth');
          }else{
            this.toastr.error("Please Use Username : angular And Pwd : 11  to login")
          }
        }
      }
  `;

  appmodulets=`
      import { BrowserModule } from '@angular/platform-browser';
      import { Injector, NgModule } from '@angular/core';
      import { AppRoutingModule } from './app-routing.module';
      import { AppComponent } from './app.component';
      import { LoginComponent } from './Login/login/login.component';
      import { ReactiveFormsModule } from '@angular/forms';
      import { HTTP_INTERCEPTORS, HttpClientModule, HttpXhrBackend,HttpClient } from '@angular/common/http';
      import { Router } from '@angular/router';
      import { ToastrModule } from 'ngx-toastr';

      @NgModule({
        declarations: [
          AppComponent,
          LoginComponent,
        ],
        imports: [
          BrowserModule,
          AppRoutingModule,
          ReactiveFormsModule,
          BrowserAnimationsModule,
        ToastrModule.forRoot(), // ToastrModule added
        ],
        providers: [
          { provide: HttpClientModule, deps: [HttpXhrBackend, Router, Injector] },
          
      //    { provide: ApiService },
        ],
        bootstrap: [AppComponent]
      })
      export class AppModule { }

  `;


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

}
