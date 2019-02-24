package com.webapp.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBHelper {

	private static String URL = "jdbc:postgresql://localhost:5432/postgres";
	private static String USER_NAME = "postgres";
	private static String PASSWORD = "db@123";
	
	public static Connection getConnection() {
		Connection connection = null;
		try {
			connection = DriverManager.getConnection(URL,USER_NAME,PASSWORD);
		}
		catch(SQLException e){
			System.out.println("FAILURE: Failed to create connection");
		}
		return connection;
	}
	
	public static void closeConnection(Connection connection) {
		try {
			if(connection!=null) {
				connection.close();
			}
		}
		catch(SQLException e) {
			System.out.println(e);
		}
	}
}
