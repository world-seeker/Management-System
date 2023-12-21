package com.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.management.model.Employee;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long>{

	
	
}
