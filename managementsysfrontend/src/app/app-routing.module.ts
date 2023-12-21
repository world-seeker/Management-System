import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  {path:"employees", component:EmployeeListComponent},
  {path:'create-employee',component:CreateEmployeeComponent},
  {path:'home',component:HomeComponent},
  {path:'update-employee/:id', component:UpdateEmployeeComponent},
  {path:'employee-detail/:id',component:EmployeeDetailComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
