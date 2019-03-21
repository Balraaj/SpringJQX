package com.webapp.home;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.webapp.model.DropDownModelEmployee;
import com.webapp.service.EmployeeService;

@Controller
@RequestMapping("/employeeHelper")
public class EmployeeHelper {

	@Autowired
	EmployeeService employeeService;
	
	@RequestMapping(value="/getDropDownData", method = { RequestMethod.GET, RequestMethod.POST })
    @ResponseBody
    public List<DropDownModelEmployee> getDropDownData() {
		return employeeService.getDropDownList();
    }
}
