import { Component } from '@angular/core';
import { Employee } from '../class/employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employee:Employee = new Employee();
  errorMessage!: string;


  constructor(private employeeService:EmployeeService,private router:Router){};

  ngOnInit():void{

  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.error('Error:', error);

        // Check if it's an HTTP error response
        if (error instanceof HttpErrorResponse) {
          console.log('HTTP Error Status:', error.status);
          console.log('HTTP Error Message:', error.message);
        
        }
        this.errorMessage = error.message ;
        setTimeout(()=>{this.errorMessage=""},3000)
      },
      complete: () => {
        // Optional: Code to execute when the observable completes
        this.router.navigate(['/employees'])
      },
    });
  }
  

  onSubmit(){
    this.saveEmployee()
    console.log(this.employee)
  }
}
