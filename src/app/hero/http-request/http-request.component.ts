import { Component, OnInit } from '@angular/core';
import { ApiConfiguration } from 'src/app/services/http/api-configuration.service';
import { ApiService } from 'src/app/services/http/api.service';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.scss']
})
export class HttpRequestComponent implements OnInit {

  constructor(
    private apiconfig:ApiConfiguration,
    private apiservice:ApiService

  ) { }

  HcModule  =
  `
  import { HTTP_INTERCEPTORS, HttpClientModule, HttpXhrBackend,HttpClient } from '@angular/common/http';

      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule
      ],
  `;

  headers=
  `
     headers:{
    'Content-Type':'application/json;charset=UTF-8',
    'responseType': 'json',
    'Authorization': 'Bearer ' + this.token,
  }
  `;

  apiService=
  `
        import { Injectable } from "@angular/core";
        import { HttpClient, HttpHeaders } from "@angular/common/http";
        import {Observable, range, throwError} from 'rxjs';
        import {map, filter, catchError} from 'rxjs/operators';
        const httpOptions = {
          headers: new HttpHeaders(
            {
              'Content-Type': 'application/json',
              'X-Frame-Options': 'SAMEORIGIN' //to allow only same origin urls
            }),
          observe: 'response' as 'response'
        }


        @Injectable({
          providedIn:"root"
        })
        export class ApiService {

          constructor(private httpClient:HttpClient){

          }
        public  get(url: string) : Observable<any>{
            return this.httpClient.get(url,{
              headers:{
                'Content-Type':'application/json;charset=UTF-8',
                'responseType': 'json'
              },
              
            })
            .pipe(catchError(this.handleError))
        }

        token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDI1NTM1NjcsImlzcyI6Imh0dHA6XC9cL2xvY2FsaG9zdCIsImF1ZCI6Imh0dHA6XC9cL2xvY2FsaG9zdCIsIm5iZiI6MTcwMjU1MzU2NywiZXhwIjoxNzAyNjM5OTY3LCJkYXRhIjp7InVzZXJuYW1lIjoiaHViYWRtaW4ifSwianRpIjoxfQ.UtpdltccC6MJdJybM5Yg-g3MT3dJiUrlPJHWGmLCBTY';//take token vaule form local stroage after login

        public getHeader(url:any):Observable<any>{
        return this.httpClient.get(url,{
          headers:{
            'Content-Type':'application/json;charset=UTF-8',
            'responseType': 'json',
            'Authorization': 'Bearer ' + this.token,
          }

        })
        .pipe(catchError(this.handleError))
        }


        //get full response i.e in normal get method we not specifying anything , so here it may give data only the jSON , sometime we need all the data for work flow of program
        public getFullResponse(url:any):Observable<any>{
          return this.httpClient.get(url,{
            headers:{
              'Content-Type':'application/json;charset-UTF-8',
              'responseType':'json',
              
            },observe: 'response' 
          })
          .pipe(catchError(this.handleError))
        }

        //post method 
        public post(url:any,data:any):Observable<any>{

          const httpOptions2 = {
            headers: new HttpHeaders(
              {
                'Content-Type': 'application/json',
                'X-Frame-Options': 'SAMEORIGIN',
                'Authorization': 'Bearer ' + this.token,
              }),
            observe: 'response' as 'response'
          }
          return this.httpClient.post(url,data,httpOptions2)
                      .pipe(catchError(this.handleError))

        }

        public delete(url:any):Observable<any>{
          return this.httpClient.delete(url, httpOptions)
                .pipe(catchError(this.handleError))
        }

        public put(url:any,data:any):Observable<any>{
          return this.httpClient.put(url,data,httpOptions)
                  .pipe(catchError(this.handleError))
        }

        public upload(url:any,data:any):Observable<any>{
          return this.httpClient.post(url,data,{
            reportProgress: true, observe: "events", headers: new HttpHeaders(
              { 'Content-Type': 'application/json' })})
              .pipe(catchError(this.handleError))
        }

        // Error handling
        private handleError(response: any) {
          return throwError(response);
        }
        }

  `;

  apiConfig=
  `
      import { Injectable } from "@angular/core";


      @Injectable({
        providedIn: "root",
      })
      export class ApiConfiguration {

        // Staging
        baseUrl = 'https://api.akamai.bigcityvoucher.co.in/v2';

        // login 
        login = this.baseUrl + "/login/login"

        //campaign
        //create-campaign
        createCampaign = this.baseUrl + "/hubadmin/get-campaign"

        //post 
        updateVoucherCode=this.baseUrl + "/hubadmin/updatevouchercode";

        //upload 
        uploadVouchers=this.baseUrl +"/hubadmin/upload-voucher-code"
        
      }
      export interface ApiConfigurationInterface { }
  `;

  modulecode=
  `
   getListApi(){

        this.apiservice.getHeader(this.apiconfig.createCampaign+"?campagin_name=&start_date=&end_date&page=1&download=1")
        .subscribe(
          (res:any)=>{
            this.listData=res.data;
            console.log("success")
          //  this.toast.Success(message)
          }
        ),err=>{
        //  this.toast.Success(message)
          console.log("Failure")
        }

      }


      //post method with json data
      Update(data:any){
        data={
          "is_blocked":1,
          "id":1
        }
        this.apiservice.post(this.apiconfig.updateVoucherCode,data)
            .subscribe((res)=>{
              console.log("yes");
              //this.toast.Success(message)

            },err=>{
              console.log("error in api");
            // this.toast.Error(message)
            })
    }

    Upload(value){
      this.apiservice.upload(this.apiconfig.uploadVouchers,value)
      .subscribe((res)=>{
        console.log("Sucessfully Uploaded");
        //this.toast.Success(message)
      },err=>{
        console.log("error in api");
        //this.toast.Success(message)
      })
    }
  `;

  ngOnInit(): void {
    this.getListApi();
    this.Update('')
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

listData;
  getListApi(){

    this.apiservice.getHeader(this.apiconfig.createCampaign+`?campagin_name=&start_date=&end_date&page=1&download=1`)
    .subscribe(
      (res:any)=>{
        this.listData=res.data;
        console.log("success")
      //  this.toast.Success(message)
      }
    ),err=>{
    //  this.toast.Success(message)
      console.log("Failure")
    }

  }


  //post method with json data
  Update(data:any){
     data={
      "is_blocked":1,
      "id":1
    }
    this.apiservice.post(this.apiconfig.updateVoucherCode,data)
        .subscribe((res)=>{
          console.log("yes");
          //this.toast.Success(message)

        },err=>{
          console.log("error in api");
         // this.toast.Error(message)
        })
}

Upload(value){
  this.apiservice.upload(this.apiconfig.uploadVouchers,value)
  .subscribe((res)=>{
    console.log("Sucessfully Uploaded");
    //this.toast.Success(message)
  },err=>{
    console.log("error in api");
    //this.toast.Success(message)
  })
}

}
