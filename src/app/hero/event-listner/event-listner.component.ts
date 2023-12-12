import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-listner',
  templateUrl: './event-listner.component.html',
  styleUrls: ['./event-listner.component.scss']
})
export class EventListnerComponent implements OnInit {
  loginIcon=true;
  loginTab=false;
  changeIcon=true;
  changeTab=false;
  searchIcon=true;
  searchTab=false;
 
  syntax =`<button type="button" (click)="changeStatus()" ></button>`;
  syntax1=`(target_event)=templateEvent($event)`;
  clickhtml=`
  <button (click)=OnClick() class="button btn btn-primary" >
  <i class="fa-regular fa-eye" *ngIf="view"></i>  
  <i class="fa-regular fa-eye-slash" *ngIf="!view"></i>
  </button>`;
  clickts=`
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
  `;

  changehtml=`
    <div class="col-3">
      <!-- <label for="">Select Status</label> -->
      <select name="" id="" class="form-control" (change)="getIsBlocked($event)">
      <option value="" selected disabled> Select Available User</option>
      <option value="1">Blocked</option>
      <option value="0">Un Blocked</option>
      </select>
    </div>
  `;
  changets=`        
    getIsBlocked(e){
      this.is_blocked=e.target.value;
    }
  `;

  serachHtml=` 
            <div class="col-md-3 text-end">
            <input type="text" class="form-control" [(ngModel)]="search" placeholder="Search">
          </div>`;
  searchTs=`search=''`;


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

  
    toggleQuestion(id:any){

     
      if(id=='databindingid'){
      
            if(this.loginTab==true){
              this.loginTab=false;
            
            }else if(this.loginTab==false){
              this.loginTab=true;
            }
        
            if(this.loginIcon==true){
              this.loginIcon=false;
            }else if(this.loginIcon==false){
            // this.showAnswer=true;
              this.loginIcon=true;
            }
      
      }else if(id=='changeId'){
        if(this.changeTab==true){
          this.changeTab=false;
        
        }else if(this.changeTab==false){
          this.changeTab=true;
        }
    
        if(this.changeIcon==true){
          this.changeIcon=false;
        }else if(this.changeIcon==false){
          this.changeIcon=true;
        }
      }else if(id=='search_id'){
        if(this.searchTab==true){
          this.searchTab=false;
        
        }else if(this.searchTab==false){
          this.searchTab=true;
        }
    
        if(this.searchIcon==true){
          this.searchIcon=false;
        }else if(this.searchIcon==false){
          this.searchIcon=true;
        }
      }
  
    }


  }
  


