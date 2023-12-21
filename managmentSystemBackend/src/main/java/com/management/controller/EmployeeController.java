package com.management.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.management.exception.ResourceNotFoundException;
import com.management.model.Employee;
import com.management.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	
	//Gets A List of Employees present in the database
	@GetMapping("/employees")
	public List<Employee> getAllEmployee(){
		return employeeRepository.findAll();
	}
	
	// Takes a Employee to  be saved in database and saves it
	@PostMapping("/employees")
	public Employee saveEmployee(@RequestBody Employee emp) {
		return employeeRepository.save(emp);
	}
	
	//getEmployee By Id
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		
		Employee employee = employeeRepository.findById(id)
			.orElseThrow(()->new ResourceNotFoundException("Employee not found with id "+id));
		return ResponseEntity.ok(employee);
		
	}
	
	
	//update employee restapi
	@PutMapping("employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employeeDetails) {
		Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employe with id "+id+" dose not exists"));
	    employee.setFirstName(employeeDetails.getFirstName());
	    employee.setLastName(employeeDetails.getLastName());
	    employee.setEmailId(employeeDetails.getEmailId());
	    Employee updatedEmployee = employeeRepository.save(employee);
	    return ResponseEntity.ok(employee);
	}
	
	//deletes a particular employee by id
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable Long id){
		Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("not found"));
		employeeRepository.delete(employee);
		Map<String,Boolean> response = new HashMap();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
