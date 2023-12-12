import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {

  base=`<base href="/"> `;
  app=`<app-root></app-root>`;
  routerDirective=`<router-outlet></router-outlet>`;

  modulets=`
  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  import { LoginComponent } from './Login/login/login.component';
  import { HeroComponent } from './hero/hero/hero.component';
  import {SidebarComponent} from './hero/sidebar/sidebar.component'
  import { AngularbasicsComponent } from './hero/angularbasics/angularbasics.component';
  import { RoutingComponent } from './hero/routing/routing.component';
  
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
    {
      path:"angularbasics",
      component:AngularbasicsComponent
    },
    {
      path:"routing",
      component:RoutingComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { 
    
  
  }
  `;
  routingmodulets=`
  import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';

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

    @NgModule({
      declarations: [
        AppComponent,
        LoginComponent,
        HeroComponent,
        SidebarComponent,
        AngularbasicsComponent,
        RoutingComponent
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
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
`;

childroute=`
{
  path:"home",
  component:EmpolyeeComponent,
  children:[
    {
      path:"toconcat",
      component:EmpolyeeConatctComponent
    }
  ]
}`;

  constructor() { }

  ngOnInit(): void {
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
