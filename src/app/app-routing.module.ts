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

const routes: Routes = [
  {
    path:"",
    redirectTo:"sidebar",
    pathMatch: 'full'
  },
  {
    path:"home",
    component:LoginComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  

}
