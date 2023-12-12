import { Component, OnInit } from '@angular/core';
import { ApiConfiguration } from 'src/app/services/http/api-configuration.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  dIIcon=true;
  dIAnswer=false;
  serciveAnswer=false;
  serciveIcon=true;

  constructor(
    private apiconfig:ApiConfiguration
  ) { }

  ngOnInit(): void {
  }

  factory=`
      var mainApp = angular.module("mainApp", []);
        mainApp.factory('MathService', function() {
        var factory = {};//cretae one or more empty factory
        
        factory.multiply = function(a, b) {
            return a * b
        }
        
        return factory;
      }); 
  `;
  sercive=`
      mainApp.service('CalcService', function(MathService) {
        this.square = function(a) {
          return MathService.multiply(a,a);
        }
      });
  `;
  toggleQuestion(id:any){
    console.log(id);

     if(id =='diid'){

      if(this.dIAnswer==true){
        this.dIAnswer=false;
      
      }else if(this.dIAnswer==false){
        this.dIAnswer=true;
      }
  
      if(this.dIIcon==true){
        this.dIIcon=false;
      }else if(this.dIIcon==false){
       // this.showAnswer=true;
        this.dIIcon=true;
      }

    }else if(id =='service_id'){

      if(this.serciveAnswer==true){
        this.serciveAnswer=false;
      
      }else if(this.serciveAnswer==false){
        this.serciveAnswer=true;
      }
  
      if(this.serciveIcon==true){
        this.serciveIcon=false;
      }else if(this.serciveIcon==false){
       // this.showAnswer=true;
        this.serciveIcon=true;
      }

    }


  }

display=false;
 copyText(val){
  const v1=this.apiconfig;
  console.log(v1)
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

  appmodulets=`
      import { BrowserModule } from '@angular/platform-browser';
      import { Injector, NgModule } from '@angular/core';

      import { AppRoutingModule } from './app-routing.module';
      import { AppComponent } from './app.component';
      import { LoginComponent } from './Login/login/login.component';
      import { ReactiveFormsModule } from '@angular/forms';
      import { HeroComponent } from './hero/hero/hero.component';
      import { SidebarComponent } from './hero/sidebar/sidebar.component';
      import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
      import {MatToolbarModule} from '@angular/material/toolbar';
      import {MatSidenavModule} from '@angular/material/sidenav';
      import {MatIconModule} from '@angular/material/icon';
      import {MatListModule} from '@angular/material/list';
      import {MatButtonModule} from '@angular/material/button';
      import { AngularbasicsComponent } from './hero/angularbasics/angularbasics.component';
      import { RoutingComponent } from './hero/routing/routing.component';
      import { FormvalidationComponent } from './hero/formvalidation/formvalidation.component';
      import { EventListnerComponent } from './hero/event-listner/event-listner.component';
      import { ExcelTempleteComponent } from './hero/excel-templete/excel-templete.component';
      import { HTTP_INTERCEPTORS, HttpClientModule, HttpXhrBackend } from '@angular/common/http';
      import { Router } from '@angular/router';
      import { ServiceComponent } from './hero/service/service.component';

      @NgModule({
        declarations: [
          AppComponent,
          LoginComponent,
          HeroComponent,
          SidebarComponent,
          AngularbasicsComponent,
          RoutingComponent,
          FormvalidationComponent,
          EventListnerComponent,
          ExcelTempleteComponent,
          ServiceComponent
        ],
        imports: [
          BrowserModule,
          AppRoutingModule,
          ReactiveFormsModule,
          BrowserAnimationsModule,
          MatButtonModule,
          MatListModule,
          MatIconModule,
          MatSidenavModule,
          MatToolbarModule
        ],
        providers: [
          { provide: HttpClientModule, deps: [HttpXhrBackend, Router, Injector] },
        ],
        bootstrap: [AppComponent]
      })
      export class AppModule { }

  `;

  apiconfigts=`
        import { Injectable } from "@angular/core";


        @Injectable({
          providedIn: "root",
        })
        export class ApiConfiguration {

          // Staging
          baseUrl = 'https://api.akamai.bigcityvoucher.co.in/v2';

          // login 
          login = this.baseUrl + "/login/login"

          //campaign
          //create-campaign
          createCampaign = this.baseUrl + "/hubadmin/create-campaign"
          
        }
        export interface ApiConfigurationInterface { }
  `;

  apiservicets=`
      import { Component, OnInit } from '@angular/core';
      import { ApiConfiguration } from 'src/app/services/http/api-configuration.service';

      @Component({
        selector: 'app-service',
        templateUrl: './service.component.html',
        styleUrls: ['./service.component.scss']
      })
      export class ServiceComponent implements OnInit {
        dIIcon=true;
        dIAnswer=false;
        serciveAnswer=false;
        serciveIcon=true;

        constructor(
          private apiconfig:ApiConfiguration
        ) { }

        ngOnInit(): void {
        }

        copyText(val){
          const v1=this.apiconfig;//USE it for api call
          console.log(v1)
        }

  `;

}
