import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //properties/variables
  //Database
  // db:any={
  //   1000:{"accno":1000,"usename":"anu","password":1000,"balance":50000},
    
  //   1001:{"accno":1001,"usename":"Manu","password":1001,"balance":40000},
    
  //   1002:{"accno":1002,"usename":"Sanu","password":1002,"balance":60000}
  // }
  aim="Perfect Banking Parter"
  accno="Accno please"
  acno="1000"
  pswd="1000"

  constructor(private router:Router,private ds:DataService) { }  //dependency injection

  ngOnInit(): void {
  }
  //userdefined functions:


  // acnoChange(event:any) //type of event is any( any :since we dont know the data type )
  // {
  //   this.acno=event.target.value
  //   console.log(this.acno);
    
  // }
  // pswdChange(event:any)
  // {
  //   this.pswd=event.target.value
  //   console.log(this.pswd);
    
  // }
  login()
  {
    var acno=this.acno
    var pswd=this.pswd
    // let db=this.db
    const result=this.ds.login(acno,pswd)
    if(result)
    {
      // if(pswd==db[acno]["password"])
      // {
      //   alert("Loggined Successfully");
      //   this.router.navigateByUrl("home")
        
      // }
      // else{
      //   alert("Login failed");
        
      // }
      alert("Loggined Successfully");
        this.router.navigateByUrl("home")

    }
    // else{
    //   alert("User Does not exist");
    // }
  }
  // login(a:any, p:any)
  // {
  //   var acno=a.value
  //   var pswd=p.value
  //   let db=this.db
  //   if(acno in db)
  //   {
  //     if(pswd==db[acno]["password"])
  //     {
  //       alert("Loggined Successfully");
        
  //     }
  //     else{
  //       alert("Login failed");
        
  //     }
  //   }
  //   else{
  //     alert("User Does not exist");
  //   }
  // }

}
