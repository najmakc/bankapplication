import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //Database
  db:any={
    1000:{"accno":1000,"usename":"anu","password":1000,"balance":50000},
    
    1001:{"accno":1001,"usename":"Manu","password":1001,"balance":40000},
    
    1002:{"accno":1002,"usename":"Sanu","password":1002,"balance":60000}
  }
  constructor() { }
  login(acno:any,pswd:any)
  {
  
    let db=this.db
    if(acno in db)
    {
      if(pswd==db[acno]["password"])
      {
        return true
        
      }
      else{
        alert("Login failed")
        return false
        
      }
    }
    else{
      alert("User Does not exist");
      return false
    }
  }

  //register
  register(usename:any,accno:any,password:any)
  {
    let db=this.db
    if(accno in db)
    {
      return false
    }
    else{
      //insert in db
      db[accno]={
        accno,
        usename,
        password,
        "balance":0
      }
      return true
    }
  }
  deposit(acno:any,password:any,amt:any)
  {
    var amount=parseInt(amt)
    let db=this.db
    if(acno in db)
    {
      if(password==db[acno]["password"])
      {
        db[acno]["balance"]+=amount
        return db[acno]["balance"]
      }
      else
      {
        alert("Incorrect password")
        return false
      }
    }
    else{
      alert("User does not exist")
      return false
    }
  }
  withdraw(acno:any,password:any,amt:any)
  {
    var amount=parseInt(amt)
    let db=this.db
    if(acno in db)
    {
      if(password==db[acno]["password"])
      {
        if((db[acno]["balance"])>amount)
        {
          db[acno]["balance"]-=amount
          return db[acno]["balance"]
        }
        else{
          alert("Insufficient balance")
          return false
        }
      }
      else
      {
        alert("Incorrect password")
        return false
      }
    }
    else{
      alert("User does not exist")
      return false
    }
  }
}
