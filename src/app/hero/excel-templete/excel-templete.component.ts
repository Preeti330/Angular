import { Component, OnInit } from '@angular/core';
import { Workbook } from 'exceljs';

//import * as Excel from "exceljs";

@Component({
  selector: 'app-excel-templete',
  templateUrl: './excel-templete.component.html',
  styleUrls: ['./excel-templete.component.scss']
})
export class ExcelTempleteComponent implements OnInit {
  view=true;
  condition=false;
  constructor(
    // private xlsx: Workbook,
  ) { }

  ngOnInit(): void {

  }

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

  generateTemplete(){
    // let workbook=new Workbook();
    // console.log(workbook);
  //  const workbook = new ExcelJS.Workbook();
  //  let workbook = 
  // new Workbook();
  // const workbook = new Excel.Workbook();
  }

 

}
