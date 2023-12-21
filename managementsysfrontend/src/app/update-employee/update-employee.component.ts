import { Component } from '@angular/core';
import { Employee } from '../class/employee';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  id!:number;
  employee:Employee = new Employee(); 
  errorMessage!:string;
  
  constructor(private employeeService:EmployeeService, private route:ActivatedRoute,private router:Router){}

  ngOnInit():void{
    this.id = this.route.snapshot.params["id"];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next:(data)=>{
        this.employee = data;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id,this.employee).subscribe({
      next:(data)=>{},
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{
        this.router.navigate(["/employees"]);
      }
    })
  }


}
