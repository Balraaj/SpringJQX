package com.webapp.home;

import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

	@RequestMapping(value = "/home", method = { RequestMethod.GET, RequestMethod.POST })
	public String index(final HttpServletRequest request,final Model model) {
		model.addAttribute("time", new Date().toString());
		return "home";
	}
}