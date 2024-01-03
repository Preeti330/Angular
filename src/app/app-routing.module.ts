import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { HeroComponent } from './hero/hero/hero.component';
import {SidebarComponent} from './hero/sidebar/sidebar.component'
import { AngularbasicsComponent } from './hero/angularbasics/angularbasics.component';
import { RoutingComponent } from './hero/routing/routing.component';
import { FormvalidationComponent } from './hero/formvalidation/formvalidation.component';
import { EventListnerComponent } from './hero/event-listner/event-listner.component';
import { ExcelTempleteComponent } from './hero/excel-templete/excel-templete.component';
import { ServiceComponent } from './hero/service/service.component';
import { PromiseandobservablesComponent } from './hero/promiseandobservables/promiseandobservables.component';
import { HttpRequestComponent } from './hero/http-request/http-request.component'
import { AuthenticationComponent } from './hero/authentication/authentication.component';
import { AuthGuard } from 'src/app/services/auth/auth.guard';
import { ToasterComponent } from './hero/toaster/toaster.component';
import { SinglePageaplComponent } from './hero/single-pageapl/single-pageapl.component';
import { DataTransferComponent } from './hero/data-transfer/data-transfer.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"sidebar",
   // redirectTo:"home",
    pathMatch: 'full'
  },
  {
    path:"login",
    component:LoginComponent,
  //  loadChildren: 'AuthenticationComponent',
    // canActivate:[AuthGuard]
  },
  {
    path:"hero",
    component:HeroComponent
  },
  {
    path:"sidebar",
    component:SidebarComponent
  },
  // {
  //   path:"module",
  //   component:ModuleComponent
  // },
  {
    path:"angularbasics",
    component:AngularbasicsComponent
  },
  {
    path:"routing",
    component:RoutingComponent
  },
  {
    path:"formvalidation",
    component:FormvalidationComponent
  },
  {
    path:"eventlistner",
    component:EventListnerComponent
  },
  {
    path:"exceltemplete",
    component:ExcelTempleteComponent
  },
  {
    path:"services",
    component:ServiceComponent
  },
  {
    path:"promiseandobservables",
    component:PromiseandobservablesComponent
  },
  {
    path:"httprequest",
    component:HttpRequestComponent
  },
  {
    path:"auth",
    component:AuthenticationComponent,
  //  loadChildren: 'LoginComponent',
    canActivate:[AuthGuard]
  },
  {
    path:"toaster",
    component:ToasterComponent
  },
  {
    path:"spa",
    component:SinglePageaplComponent
  },
  {
    path:"data",
    component:DataTransferComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

}
