package com.webapp.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.webapp.dao.JDBCTemplateEmployeeDao;
import com.webapp.entity.Employee;
import com.webapp.model.DropDownModelEmployee;

@Component
public class EmployeeService {

	@Autowired
	private JDBCTemplateEmployeeDao employeeDao;
	
	
	public List<DropDownModelEmployee> getDropDownList(){
		List<Employee> employeeList = employeeDao.getAll();
		List<DropDownModelEmployee> dropDownList;
		dropDownList = employeeList.stream().map(row->mapToDropDownModel(row)).collect(Collectors.toList());
		return dropDownList;
	}
	
	private DropDownModelEmployee mapToDropDownModel(Employee employee) {
		DropDownModelEmployee dropDownRow = new DropDownModelEmployee();
		dropDownRow.setId(String.valueOf(employee.getId()));
		dropDownRow.setName(employee.getName());
		return dropDownRow;
	}
	
	private void fun(List<Employee> list) {
		list.stream().<Number>map(row-> row.getName().length()==10?10:20.9).collect(Collectors.toList());
	}
	
}
