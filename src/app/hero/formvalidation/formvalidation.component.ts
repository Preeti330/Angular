import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.scss']
})
export class FormvalidationComponent implements OnInit {
  loginIcon=true;
  loginTab=false;
  condition=false;
  uploadcondition=false;
  uploadIcon=true;
  uploadTab=false;
  updateIcon=true;
  updateTab=false;

    modulets=`
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';
    import { LoginComponent } from './Login/login/login.component';
    import { ReactiveFormsModule } from '@angular/forms';
  
    
    @NgModule({
      declarations: [
        AppComponent,
        LoginComponent,
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    `;

    logincomponentts=`
        import { Component, OnInit } from '@angular/core';
        import { FormBuilder, FormControl, FormGroup, Validator, Validators ,ReactiveFormsModule } from '@angular/forms';
        import { Router } from '@angular/router';
        @Component({
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        })
        export class LoginComponent implements OnInit {
        loginForm  //declare formGroup
        name="";

        constructor(
        private fromBuilder: FormBuilder,
        private router:Router
        ) { 
        
        }

        ngOnInit(): void {
          //  this.loginForm=new FormControl('username')
          //  this.loginForm = this.fromBuilder.group({
          //   username:['',Validators.required],
          //   pwd:['',Validators.required]
          // })

          //assgin the all fromControler fromControlerNames 
          this.loginForm=new FormGroup({
            username:new FormControl('',Validators.required),
            pwd:new FormControl('',Validators.required)
          });

        }

        login(data){
          if(data.username=='angular' && data.pwd=='P123456'){
            this.router.navigateByUrl('hero');
          }else{
            console.log("tost")
          }
        }

      }
    `;

    logincomponentcscs=`
      .background{
          height: 100vh;
      }
      .textAlignment{
          font-size: 80px;
          font-weight: 800;
          font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      }
    `;
    loginhtml=`
          <div class="row background px-4 py-3">
          <div class="col-8 col-4 bg-success bg-opacity-50 text-center text-black ">

              <div class="text" style="margin: auto auto;padding-top: 30%;">
                  <h2 class="textAlignment">Angular</h2>
              </div>

          </div>
          <div class="col-4 text-left py-20 pt-20" style="padding-top: 50px;">

              <h5 class="text-black header" >Well Come To My WebSite</h5>
              <h5 class="text-black header">Login To Angular </h5>
              <form  [formGroup]="loginForm" (ngSubmit)="login(loginForm.value)" >
                  <div class="form-group">
                      <label class="text-normal text-dark">UserName</label>
                      <input type="text" class="form-control" formControlName="username" [class.is-invalid]="loginForm.get('username').touched && loginForm.get('username').invalid"  [(ngModel)]="name">
                      <span *ngIf="loginForm.get('username').touched && loginForm.get('username').invalid" class="invalid-feedback">Please Enter Username</span>
                  </div>
                  <div class="form-group">
                      <label class="text-normal text-dark">Password</label>
                      <input type="password" class="form-control" formControlName="pwd" [class.is-invalid]="loginForm.get('pwd').invalid && loginForm.get('pwd').touched">

                      <span *ngIf="loginForm.get('pwd').touched && loginForm.get('pwd').invalid" class="invalid-feedback">Please Enter Password</span>
                  </div>
                      <!-- <div class="form-control"> -->
                          <button type="submit" class="btn btn-primary" style="margin-top: 20px;" >Submit</button>
                </form>
                <!-- {{loginFrom.value | json}} -->
          </div>
      </div>
    `;

  uploadFormhtml=`
          <ng-template #ApproveModal>
          <div class="modal-header">
              <h5 class="modal-title" id="editProfileLabel" *ngIf="flag==1">Upload User</h5>
              <button type="button" class="close" (click)="CloseModal()" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>

          <div class="modal-body" *ngIf="flag==1">
              <form [formGroup]="modalForm">
                  <div class="row mb-4 px-3">
                      <div class="col-9"></div>
                      <div class="col-3 text-right"><button class="btn btn-primary" (click)="downloadTemplate()"><i class="ti-download"></i>Template</button></div>
                      <div class="col-6  mb-3">
                          <label for="">Select Campaign</label>
                          <select class="form-control" formControlName="campaign_id"
                              [ngClass]="{'is-invalid':submitted && f.campaign_id.errors}">
                              <option value="" selected disabled>Select Campaign</option>
                              <option *ngFor="let data of campaignList" [value]="data?.id">{{data?.campagin_name}}</option>
                          </select>
                          <div class="invalid-feedback" *ngIf="submitted && f.campaign_id.errors">
                              <small *ngIf="f.campaign_id.errors.required">Select Campaign*</small>
                          </div>
                      </div>
                      <div class="col-6 mb-3">
                          <label for="">Select Denomination</label>
                          <select type="date" class="form-control" formControlName="sku_id"
                              [ngClass]="{'is-invalid':submitted && f.sku_id.errors}">
                              <option value="" selected disabled>Select Reward</option>
                              <option *ngFor="let data of skuList" [value]="data?.id">{{data?.denomination_value}}</option>
                          </select>
                          <div class="invalid-feedback" *ngIf="submitted && f.sku_id.errors">
                              <small *ngIf="f.sku_id.errors.required">Select Denomination*</small>
                          </div>
                      </div>
                      <div class="col-6 mb-3">
                          <label for="">Upload Excel File</label>
                          <div class="input-group mb-3">
                              <div class="custom-file">
                                  <label class="custom-file-label">{{NameOfFile}}</label>
                                  <input type="file" class="custom-file-input" (change)="selectFile($event)"
                                      formControlName="excelFile" [ngClass]="{'is-invalid': submitted && f.excelFile.errors}">
                              </div>
                              <div class="invalid-feedback" *ngIf="submitted && f.excelFile.errors">
                                  <small *ngIf="f.excelFile.errors.required">Select File*</small>
                              </div>
                          </div>
                      </div>
                  </div>
              </form>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-primary" (click)="Upload(modalForm.value)">Submit</button>
          </div>
        </ng-template>
    `;

    uploadhtmlClick=`
        <div class="col-3"  style="margin-top: 2%;">
        <button class="btn btn-primary w-100" (click)="addVoucher(ApproveModal)">
            Upload Users
        </button>
        </div>
    `;

  uploadFormts=`
    flag;
    modalForm;
    NameOfFile = "Choose file";
    file;
    submitted: boolean = false;
    campaignList;
    filterdata: any = {
      Startdate: "",
      Enddate: "",
      search: "",
    };

    //return from controler it is use for validation in htm file
    get f() {
      return this.modalForm.controls;
    }
      
    //to upload a file
    selectFile(e) {
      this.NameOfFile = e.target.files[0].name;
      this.file = e.target.files[0];
    }

    //here in this model we have uploading a model , so before we set data in model we have to declare the form value before submitting , lets consider the button click we load the form 
    addVoucher(ApproveModal) {
      this.flag = 1;
      this.modalservice.open(ApproveModal, {
        size: "lg",
        centered: true,
        backdrop: "static",
      });
      this.modalForm = this.fb.group({
        campaign_id: new FormControl("", [Validators.required]),
        sku_id: new FormControl("", [Validators.required]),
        excelFile: new FormControl("", [Validators.required]),
      });
    }


    //their is option for select campagin 
    getCampaignList() {
      this.apiService
        .get(
          this.apiConfig.getCampaignList +
            "?campagin_name="$"{this.filterdata.Startdate}&start_date="$"{this.filterdata.Startdate}&end_date="$"{this.filterdata.Startdate}&page="$"{this.filterdata.Startdate}"
        )
        .subscribe((res: any) => {
          this.campaignList = res.data;
        });
    }

    //now append all the data after submit , here in this modal ngSubmit is used to submit the data 
    Upload(value) {
      let selectedRegion = [];
      // console.log(value)
  
      this.submitted = true;
      if (this.modalForm.invalid) {
        return;
      }
      const formData = new FormData();
  
      if (this.flag == 1) {
        formData.append("upload_file", this.file);
        formData.append("denomination_id", value.sku_id);
        formData.append("campaign_id", value.campaign_id);
        formData.append("voucher_type", "2");
  
        this.apiService
          .upload(this.apiConfig.uploadUsers, formData)
          .subscribe((res: any) => {
            try {
              let message = res.body.data.message;
              this.FailedCount = res.body.data.rejected;
              this.successCount = res.body.data.approved;
              this.total = this.FailedCount + this.successCount;
              this.failed_records = JSON.stringify(res.body.data.rejected_list);
              this.toast.Success(message);
              this.CloseModal();
              this.getUsersList();
            } catch {}
          });
      }
    }

    //close modal and reset all the variables
    CloseModal() {
      this.modalservice.dismissAll();
      this.modalForm.reset();
      this.file = "";
      this.NameOfFile = "";
      this.submitted = false;
    }
  `;  

  updateFormts=`
    flag;
    modalForm;
    NameOfFile = "Choose file";
    file;
    submitted: boolean = false;
    campaignList;
    filterdata: any = {
      Startdate: "",
      Enddate: "",
      search: "",
    };

    //return from controler it is use for validation in htm file
    get f() {
      return this.modalForm.controls;
    }
      

    //here in this model we have uploading a model , so before we set data in model we have to declare the form value before submitting , lets consider the button click we load the form 
    updateVoucher(updatevoucher, data){
      this.modalservice.open(updatevoucher,{size: 'md',centered:true,backdrop:'static'});
  
      //this.voucher_is_blocked=data.voucher_is_blocked;
      this.updateUserForm = this.fb.group({
        id: new FormControl(data.id,[Validators.required]),
        is_blocked: new FormControl(data.user_is_blocked,[Validators.required])
      })
    }


    //
   

    //now append all the data after submit , here in this modal ngSubmit is used to submit the data  
    Update(data){
    
      this.apiService.post(this.apiConfig.updateUser,data).subscribe((res:any)=>{
        try{
          let message = res.body.data
          this.toast.Success(message)
          this.CloseModal()
          this.getVouchersList()
        }
        catch{ }
      })
  
    }
    getIsBlocked(e){
      this.is_blocked=e.target.value;
    }

    //close modal and reset all the variables
    CloseModal() {
      this.modalservice.dismissAll();
      this.modalForm.reset();
      this.file = "";
      this.NameOfFile = "";
      this.submitted = false;
    }
  `; 

  updateFormhtml=`
          <ng-template #updateuser>
            
          <div class="modal-header">
              <h5 class="modal-title" id="editProfileLabel">Block User For This Campagin</h5>
              <button type="button" class="close" (click)="CloseModal()" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>

          <div class="modal-body" >
              <form [formGroup]="updateUserForm">
                  <div class="row mb-4 px-3">
                      <!-- <div class="col-3"></div> -->
                      <div class="col-3  mb-3">
                          <label >Status </label>     
                      </div>
                    
                      <div class="col-6 mb-3">
                          
                        
                          <select class="form-control" formControlName="is_blocked"
                              [ngClass]="{'is-invalid':submitted && f.is_blocked.errors}">
                              <option [value]="0" selected>Un Blocked</option>
                              <option [value]="1"  selected>Blocked</option>
                          </select>
                          <div class="invalid-feedback" *ngIf="submitted && f.is_blocked.errors">
                              <small *ngIf="f.is_blocked.errors.required">Select Status*</small>
                          </div>
                    
                      <!-- </input> -->
                      </div>
                      
                  </div>
              </form>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-primary" (click)="Update(updateUserForm.value)">Submit</button>
          </div>
        </ng-template>
  `;

  updateFromHtmlClick=`
    <td>
    <button class="btn btn-primary  btn-outline-primary btn-sm"><strong
          (click)="updateVoucher(updateuser, data)">Edit</strong>
    </button>
    </td>
  
  `;
  constructor() { }

  ngOnInit(): void {
  }

  toggleQuestion(id:any){
    console.log(id);
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

    }
    else if(id=='upload_id'){

      if(this.uploadTab==true){
        this.uploadTab=false;
      
      }else if(this.uploadTab==false){
        this.uploadTab=true;
      }
  
      if(this.uploadIcon==true){
        this.uploadIcon=false;
      }else if(this.uploadIcon==false){
       // this.showAnswer=true;
        this.uploadIcon=true;
      }

    }
    else if(id=='update_id'){

      if(this.updateTab==true){
        this.updateTab=false;
      
      }else if(this.updateTab==false){
        this.updateTab=true;
      }
  
      if(this.updateIcon==true){
        this.updateIcon=false;
      }else if(this.updateIcon==false){
       // this.showAnswer=true;
        this.updateIcon=true;
      }

    }
    // else if(id =='databindingid'){

    //   if(this.dataBindingAnswer==true){
    //     this.dataBindingAnswer=false;
      
    //   }else if(this.dataBindingAnswer==false){
    //     this.dataBindingAnswer=true;
    //   }
  
    //   if(this.databindingIcon==true){
    //     this.databindingIcon=false;
    //   }else if(this.databindingIcon==false){
    //    // this.showAnswer=true;
    //     this.databindingIcon=true;
    //   }

    }

    code=``;
    tscode=``;
    modulecode=``;
    cssscode=``;

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


view = true;

OnClick() {
  if(this.condition ==true ){
    this.condition = false;
  }else if(this.condition ==false){
    this.condition = true;
  }
   
  if(this.uploadcondition ==true ){
    this.uploadcondition = false;
  }else if(this.uploadcondition ==false){
    this.uploadcondition = true;
  }

  if(this.view==true){
    this.view=false;
  }else if(this.view==false){
    this.view=true

  }

}

}
