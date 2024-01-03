import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promiseandobservables',
  templateUrl: './promiseandobservables.component.html',
  styleUrls: ['./promiseandobservables.component.scss']
})
export class PromiseandobservablesComponent implements OnInit {

  constructor() { }

  async=`
  // here this settime function called , and in that calling another func
  tion , and this second function will be on hold till 3 second
  
  setTimeout(myFunction, 3000);
  
  function myFunction() {
   console.log("hii preeti")
  }
  
  
  o/p: hii preeti`;

  promise =`
  const promise=new promise(resolve=>{
    setTimeOut(()=>{
      resolve("working");
      resolve("working1");
      resolve("working2");
    },1000
    )
  })

  promise.then(result=>console.log(result))

  o/p : working
  `;

  obseravlbe=`
  const obse=new observable(subscribe=>{
    setTimeOut(()=>{
      subscribe.next("observable working")
      subscribe.next("observable working1")
      subscribe.next("observable working2")
    },1000)
  })

  obse.subscribe(result=>console.log(result))

  o/p: observable working
       observable working1
       observable working2

  `

  ngOnInit(): void {
  }

}
