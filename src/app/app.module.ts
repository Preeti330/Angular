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
import { HTTP_INTERCEPTORS, HttpClientModule, HttpXhrBackend,HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServiceComponent } from './hero/service/service.component';
import { PromiseandobservablesComponent } from './hero/promiseandobservables/promiseandobservables.component';
import {ApiService} from './services/http/api.service';
import { HttpRequestComponent } from './hero/http-request/http-request.component';
import { AuthenticationComponent } from './hero/authentication/authentication.component';
//import {NgToastModule} from 'ng-angular-popup'
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 import { ToastrModule } from 'ngx-toastr';
import { ToasterComponent } from './hero/toaster/toaster.component';
import { SinglePageaplComponent } from './hero/single-pageapl/single-pageapl.component';
import { DataTransferComponent } from './hero/data-transfer/data-transfer.component';

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
    ServiceComponent,
    PromiseandobservablesComponent,
    HttpRequestComponent,
    AuthenticationComponent,
    ToasterComponent,
    SinglePageaplComponent,
    DataTransferComponent
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
    MatToolbarModule,
    HttpClientModule,
   // NgToastModule
   ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    { provide: HttpClientModule, deps: [HttpXhrBackend, Router, Injector] },
    
//    { provide: ApiService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
