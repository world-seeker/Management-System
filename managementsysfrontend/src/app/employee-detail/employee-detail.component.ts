import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../class/employee';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
   id!:number;
  employee:Employee = new Employee();
 
  constructor(private employeeService:EmployeeService,private route:ActivatedRoute){}
 
  ngOnInit():void{
    this.id = this.route.snapshot.params["id"];
    this.employeeService.getEmployeeById(this.id).subscribe({
      next:(data)=>{
        this.employee =data;
      }
    })
  }


  
}
