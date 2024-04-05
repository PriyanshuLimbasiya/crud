import { Component } from '@angular/core';
import { ApiEmployeeService } from '../api-employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employee:any=[];
    constructor(private _api:ApiEmployeeService,private _router:Router){}

    ngOnInit(): void {
      this._api.getAll().subscribe((res)=>{
        this.employee=res;
        console.log(res);
      })

    }
    deleteemp(id:any)
    {
      this._api.delete(id).subscribe(res=>{
        this.ngOnInit();
      })
    }
}
