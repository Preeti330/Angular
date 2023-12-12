import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  toggle_menu: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  // toggleMenu(event){
  //   console.log(333)
  //   return this.toggle_menu = !this.toggle_menu;
  // }

condition = false;
view = true;

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


code = `
<div>
<h1>prrrti</h1>
</div>
`;

// code = `
//   public class Example {
//     public static void main(String[] args) {
//         System.out.println("Hello World");
//     }
//   }
//  `;

tscode=
`
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
                                path:"module",
                                component:ModuleComponent
                              }
                        ];`;

  modulecode=`
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
  
  @NgModule({
    declarations: [
      AppComponent,
      LoginComponent,
      HeroComponent,
      SidebarComponent
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
  export class AppModule { }`;

  cssscode=`
    .mat-sidenav{
      background-color: rgb(241, 246, 252);
    }
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

   //code to display text copied     
  //  let codesinppetbuttonId=document.getElementById('codesinppetbutton');
  //      //codesinppetId.select();
  //  codesinppetbuttonId.innerText="preeti";


//  if(this.display==false){

  
//   // console.log(this.display)
//   let codesinppetbuttonId=document.getElementById('codesinppetbutton');
//   //codesinppetId.select();
//   codesinppetbuttonId.innerText="preeti";
//   this.display=true;

//  }else if(this.display==true){
//     this.display=false;

//  }

//  if(this.display==false){
  
//  }

   

  }


}
