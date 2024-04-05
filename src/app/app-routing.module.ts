import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'employee/add',component:AddEmployeeComponent},
  {path:'employee/edit/:id',component:AddEmployeeComponent},
  {path:'employee/:id',component:DetailEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
