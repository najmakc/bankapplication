import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user=""
  acno=""
  pswd=""

  //form group//group is property so give it above constructor
  registerForm=this.fb.group(
    {
      acno:'1',
      pswd:'',
      uname:''

    }
  )
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register()
  {
    var uname=this.user
    var accno=this.acno
    var pswd=this.pswd
    const result=this.ds.register(uname,accno,pswd)
    if(result)
    {
      alert('successfully registered')
      this.router.navigateByUrl("")
    }
    else{
      alert("Already existing customer....please log in!!!!")
    }
  }

}
