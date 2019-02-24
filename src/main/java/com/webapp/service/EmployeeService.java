package com.webapp.service;

import java.util.List;
import java.util.stream.Collectors;

import com.webapp.dao.EmployeeDao;
import com.webapp.entity.Employee;
import com.webapp.model.DropDownModelEmployee;

public class EmployeeService {

	private EmployeeDao employeeDao;
	
	public EmployeeService() {
		employeeDao = new EmployeeDao();
	}
	
	public List<DropDownModelEmployee> getDropDownList(){
		List<Employee> employeeList = employeeDao.getAll();
		List<DropDownModelEmployee> dropDownList;
		dropDownList = employeeList.stream().map(row->mapToDropDownModel(row)).collect(Collectors.toList());
		return dropDownList;
	}
	
	private DropDownModelEmployee mapToDropDownModel(Employee employee) {
		DropDownModelEmployee dropDownRow = new DropDownModelEmployee();
		dropDownRow.setId(String.valueOf(employee.getId()));
		dropDownRow.setName(employee.getFirstName()+" "+employee.getLastName());
		return dropDownRow;
	}
}
