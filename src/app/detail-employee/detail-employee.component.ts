import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { ApiEmployeeService } from '../api-employee.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrl: './detail-employee.component.css'
})
export class DetailEmployeeComponent {
  constructor(private _api:ApiEmployeeService,
    private _activateRoute:ActivatedRoute,
    private router:Router){}

  data:any={};

  ngOnInit(): void {
    let id=Number(this._activateRoute.snapshot.paramMap.get('id'))
    this._api.getById(id).subscribe(res=>{
      this.data=res;
    })
  }

  deleteemp(id:any)
  {
    this._api.delete(id).subscribe(res=>{
      this.router.navigate(['employee'])
    })
  }
}
