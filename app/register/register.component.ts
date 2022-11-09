import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:any;

  constructor(
    private router:Router,
    private route: ActivatedRoute
  ) { 

    this.form =new FormGroup(
      {
        name:new FormControl("",Validators.required),
        email:new FormControl("",Validators.required),
        phone:new FormControl("",Validators.required),
        age:new FormControl("",Validators.required),
        country:new FormControl("",Validators.required),
        state:new FormControl("",Validators.required),
        city:new FormControl("",Validators.required),
        interests:new FormControl("",Validators.required),
      }
    )

   }

  ngOnInit(): void {
  }

  saveCall()
  {
    let data:any=this.form.value;
    this.router.navigate(['./reg-data'],{
      queryParams:{data:JSON.stringify(data)}
    })
  }

}
