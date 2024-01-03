
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


