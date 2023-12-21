import { Component, OnInit } from '@angular/core';
import { Employee } from '../class/employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
   employees!:Employee[];

   constructor(private employeeService:EmployeeService,private router:Router){}

   ngOnInit():void{
    this.getEmployees();
  }

    private getEmployees(){
      this.employeeService.getEmployeeList().subscribe(data=>{
        this.employees = data;
      })
    };

    updateEmployee(employee:Employee,id:number){
      this.router.navigate(['update-employee',id])
    }

    deleteEmployee(id:number){
      this.employeeService.deleteEmployee(id).subscribe({
        next:(data)=>{
          console.log(data);
        },
        error:(err)=>{
          console.log(err);
        },
        complete:()=>{
          window.location.reload();
        }
      });
      
    }

    detailEmployee(id:number){
      this.router.navigate(["employee-detail",id])
    }


}
