package com.webapp.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;

import com.webapp.entity.Employee;

@Component
public class JDBCTemplateEmployeeDao {

	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	public JDBCTemplateEmployeeDao(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}
	
	public List<Employee> getAll(){
		if(jdbcTemplate==null) {
			System.out.println("ITS NULL --------------------");
		}
		//return jdbcTemplate.queryForList("SELECT * FROM employeesdatabase;", Employee.class,new Object());
		return jdbcTemplate.query("SELECT * FROM employee;", new RowMapper<Employee>(){

			@Override
			public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
				Employee employee = new Employee();
				employee.setId(rs.getInt(1));
				employee.setName(rs.getString(2));
				return employee;
			}
			
		});
	}
}
