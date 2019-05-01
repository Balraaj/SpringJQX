package com.webapp.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.webapp.entity.Employee;

public class EmployeeDao {
	
	public List<Employee> getAll(){
		
		List<Employee> employeeList = new ArrayList<>();
		Connection connection = DBHelper.getConnection();
		try {
			Statement statement = connection.createStatement();
			String sql = "SELECT * FROM employeesdatabase";
			ResultSet rs = statement.executeQuery(sql);
			while(rs.next()) {
				Employee employee = new Employee();
				employee.setId(rs.getInt(1));
				employee.setName(rs.getString(2));
				employeeList.add(employee);
			}
		}
		catch(SQLException e) {
			System.out.println(e);
		}
		finally {
			DBHelper.closeConnection(connection);
		}
		
		return employeeList;
	}
}
