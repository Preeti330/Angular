import { Component, OnInit } from '@angular/core';
import { ApiConfiguration } from "src/app/services/http/api-configuration.service";


@Component({
  selector: 'app-angularbasics',
  templateUrl: './angularbasics.component.html',
  styleUrls: ['./angularbasics.component.scss']
})
export class AngularbasicsComponent implements OnInit {
  showAnswer=false;
  showDownIcon=true;
  ngModuleAnswer=false;
  ngModuleIcon=true;
  moduleIcon=true;
  moduleAnswer =false;
  componentAnswer=false;
  componentIcon=true;
  dataBindingAnswer=false;
  databindingIcon=true;
  dIAnswer=false;
  dIIcon=true;
  directive=false;
  directiveIcon=true;
  pipeAnswer=false;
  pipeIcon=true;

  data="{{}}";
  className='text-danger';
  className2='text-success';
  hasError=true;
  size='30px';
  styleClass={
    'text-danger':this.hasError,
    'text-success':!this.hasError,
    'text-size':this.size
  }

  code=`
  <p><b>One Way Data Binding /String Interpolation</b><br>
  by using {{data}} we bind the data . the data coming in {{data}} is </p>

  <code [innerHTML]="{{datadisplay}}"></code>
  <input disable=isdiable>
  `
  tscode=`
  data="{{}}";
  datadisplay="preeti reedy"
  isdisable="true";
  `;

  twowayCode=`
  <form  [formGroup]="loginForm" (ngSubmit)="login(loginForm.value)" >
  <div class="form-group">
      <label class="text-normal text-dark">UserName</label>
      <input type="text" class="form-control" formControlName="username" [class.is-invalid]="loginForm.get('username').touched && loginForm.get('username').invalid"  [(ngModel)]="name">{{name}}
  </div>    
  </form>`

  twowaytscode=`name =" "`;

  classbinding=`
  <h7 [class]="className">  [class]=className </h7>
  <h7 [class.text-danger]="hasError">[class.text-danger]="hasError"</h7>
  <h7 [ngClass]="styleClass">[ngClass]="styleClass"</h7>`;

  classbindingts=` 
  className='text-danger';
  hasError=true;
  size='30px';
  styleClass={
    'text-danger':this.hasError,
    'text-sucess':!this.hasError,
    'text-size':this.size
  }`;


  carclass=`
  export class car{
    engine
    tyre
    constructor(){
      this.engine=new engine();
      this.tyre=new tyre()
    }
  }

  export class engine{
    constructor(){
    }
  }

  export class tyre{
    constructor(){
    }
  }

  `

  carclassid=`
  export class car{
    engine
    tyre
    constructor(engine){
      this.engine=engine;
      this.tyre=tyre
    }
  }
  `;

  classbindingex=`
      <h7 [class]="className">  [class]=className </h7>
      <h7 [class.text-danger]="hasError">[class.text-danger]="hasError"</h7>
      <h7 [ngClass]="styleClass">[ngClass]="styleClass"</h7>


      //in .ts file
      className='text-danger';
      hasError=true;
      size='30px';
      styleClass={
        'text-danger':this.hasError,
        'text-sucess':!this.hasError,
        'text-size':this.size
      }
  
  `;

  classbindwithcond=`
    <p [ngClass]="hasError?className:className2">Apply Class Binding on condtion </p>
    className='text-danger';
    className2='text-success';
  `;

  constructor(
    private apiconfig : ApiConfiguration
  ) { }

  ngOnInit(): void {
  }

  toggleQuestion(id:any){
    console.log(id,"prrrr");

    if(id=='ngmodelid'){
      if(this.ngModuleAnswer==true){
        this.ngModuleAnswer=false;
      
      }else if(this.ngModuleAnswer==false){
        this.ngModuleAnswer=true;
      }

      
      if(this.ngModuleIcon==true){
        this.ngModuleIcon=false;
      }else if(this.ngModuleIcon==false){
      // this.showAnswer=true;
        this.ngModuleIcon=true;
      }


    }else if(id=='angularid'){

      if(this.showAnswer==true){
        this.showAnswer=false;
      
      }else if(this.showAnswer==false){
        this.showAnswer=true;
      }
  
      if(this.showDownIcon==true){
        this.showDownIcon=false;
      }else if(this.showDownIcon==false){
       // this.showAnswer=true;
        this.showDownIcon=true;
      }

    }else if(id=='moduleid'){

      if(this.moduleAnswer==true){
        this.moduleAnswer=false;
      
      }else if(this.moduleAnswer==false){
        this.moduleAnswer=true;
      }
  
      if(this.moduleIcon==true){
        this.moduleIcon=false;
      }else if(this.moduleIcon==false){
       // this.showAnswer=true;
        this.moduleIcon=true;
      }

    }else if(id=='componentid'){

      if(this.componentAnswer==true){
        this.componentAnswer=false;
      
      }else if(this.componentAnswer==false){
        this.componentAnswer=true;
      }
  
      if(this.componentIcon==true){
        this.componentIcon=false;
      }else if(this.componentIcon==false){
       // this.showAnswer=true;
        this.componentIcon=true;
      }

    }else if(id =='databindingid'){

      if(this.dataBindingAnswer==true){
        this.dataBindingAnswer=false;
      
      }else if(this.dataBindingAnswer==false){
        this.dataBindingAnswer=true;
      }
  
      if(this.databindingIcon==true){
        this.databindingIcon=false;
      }else if(this.databindingIcon==false){
       // this.showAnswer=true;
        this.databindingIcon=true;
      }

    }else if(id =='diid'){

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

    }else if(id='directiveid'){
      if(this.directive==true){
        this.directive=false;
      
      }else if(this.directive==false){
        this.directive=true;
      }
  
      if(this.directiveIcon==true){
        this.directiveIcon=false;
      }else if(this.directiveIcon==false){
       // this.showAnswer=true;
        this.directiveIcon=true;
      }
    }else if(id='pipeid'){

      if(this.pipeAnswer==true){
        this.pipeAnswer=false;
      
      }else if(this.pipeAnswer==false){
        this.pipeAnswer=true;
      }
  
      if(this.pipeIcon==true){
        this.pipeIcon=false;
      }else if(this.pipeIcon==false){
       // this.showAnswer=true;
        this.pipeIcon=true;
      }
    }


   
    console.log(this.showAnswer)
  }

  display=false;

 copyText(val){
  
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
