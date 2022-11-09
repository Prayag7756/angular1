import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-reg-data',
  templateUrl: './reg-data.component.html',
  styleUrls: ['./reg-data.component.css']
})
export class RegDataComponent implements OnInit {

    data:any;
  constructor(
    private router:Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {

      this.route.queryParams.subscribe((params)=>{
        console.log(params);
        this.data=JSON.parse(params['data']);
      })

  }

}
