import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-transfer',
  templateUrl: './data-transfer.component.html',
  styleUrls: ['./data-transfer.component.scss'],
  
})
export class DataTransferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  childts=`
        import { Component, Input, OnInit } from '@angular/core';

        @Component({
          selector: 'app-data-transfer',
          templateUrl: './data-transfer.component.html',
          styleUrls: ['./data-transfer.component.scss'],
          
        })
        export class DataTransferComponent implements OnInit {

          constructor() { }

          ngOnInit(): void {
          }

          //declare a veraible using @Input()
          @Input() item:'';

        }
  `;

  childhtml=`
      <p>
        Today's item: {{item}}
      </p>
  `

  appts=`
    import { Component } from '@angular/core';
    import { LoginComponent } from './Login/login/login.component';

    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss']
    })
    export class AppComponent {
      title = 'Angular';
      item='Data Transfer'
    }

  `;

  apphtml=`
  <app-data-transfer [item]='item'></app-data-transfer>
  `;

  childhtml1=`
        <label for="item-input">Add an item:</label>
        <input type="text" id="item-input" #newItem>
        <button type="button" (click)="addNewItem(newItem.value)">Add to parent's list</button>
  `;

  childts1=`
      import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

      @Component({
        selector: 'app-data-transfer',
        templateUrl: './data-transfer.component.html',
        styleUrls: ['./data-transfer.component.scss'],
        
      })
      export class DataTransferComponent implements OnInit {

        constructor() { }

        ngOnInit(): void {
        }

        //declare a veraible using @Input()
        // @Input() item:'';

        @Output() newItemEvent = new EventEmitter<string>();

        addNewItem(value: string) {
          this.newItemEvent.emit(value);
        }

      }
  `;

  appts1=`
      items = ['item1', 'item2', 'item3', 'item4'];

      addItem(newItem: string) {
        console.log(newItem)
        this.items.push(newItem);
      }
  `;

  apphtml1=`
  <app-data-transfer (newItemEvent)="addItem($event)"></app-data-transfer>
  `;
  //declare a veraible using @Input()
  // @Input() item:'';

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
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

}
