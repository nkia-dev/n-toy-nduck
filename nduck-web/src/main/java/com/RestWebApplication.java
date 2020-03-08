package com;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class RestWebApplication {

	public static final String APPLICATION_LOCATIONS = "spring.config.location="
			+ "classpath:application.yml";

	public static void main(String[] args) {
		new SpringApplicationBuilder(RestWebApplication.class)
				.properties(APPLICATION_LOCATIONS)
				.run(args);
	}

}

