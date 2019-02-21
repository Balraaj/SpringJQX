package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.webapp.home")
public class SpringJqxApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringJqxApplication.class, args);
	}

}
