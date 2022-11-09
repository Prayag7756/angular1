import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _route:Router, private _http:HttpClient) { }
  signup:FormGroup|any;
  signupuser:any;
  ngOnInit(): void {
    this.signup=new FormGroup({
      'fname':new FormControl(),
      'lname':new FormControl(),
      'email':new FormControl(),
      'phone':new FormControl(),
      'password':new FormControl(),
    })
  }

  signupdata(signup:FormGroup){
    console.log(this.signup.value);
    this.signupuser=this.signup.value.fname
    this._http.post<any>("http://localhost:3000/signup", this.signup.value)
    .subscribe(res=>{
      alert('Data added successfully. Go back to login page & login using your first name & password');
      this.signup.reset();
      this._route.navigate(['login']);
    }, err=>{
      alert('Something went wrong');
    })
  }

  
}
