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
