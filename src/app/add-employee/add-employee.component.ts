import { Component } from '@angular/core';
import { ApiEmployeeService } from '../api-employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  idedit=-1;
  data={
    name:"",
    avatar:""
  }
  constructor(private _api:ApiEmployeeService,private _router:Router,private _activatedroute:ActivatedRoute){}

  submit(form:any)
  {
    if(this.idedit===-1)
    {
     this._api.insert(form).subscribe((res:any)=>{
      this.data=res;
      this._router.navigate(['employee'])
    })
    }
    else
    {
       this._api.update(form,this.idedit).subscribe((res:any)=>{
        this._router.navigate(['employee']);
      })
    }
  }

  ngOnInit(): void {
    this.idedit=Number(this._activatedroute.snapshot.paramMap.get('id'));
    this._api.getById(this.idedit).subscribe((res:any)=>{
      this.data.name=res.name;
      this.data.avatar=res.avatar;
    })
  }
}
