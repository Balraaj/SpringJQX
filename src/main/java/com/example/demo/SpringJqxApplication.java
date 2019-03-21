package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages= {"com.webapp.home","com.webapp.dao","com.webapp.service"})
public class SpringJqxApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringJqxApplication.class, args);
	}

}
