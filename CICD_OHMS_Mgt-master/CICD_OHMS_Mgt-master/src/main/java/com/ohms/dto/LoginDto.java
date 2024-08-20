package com.ohms.dto;

import lombok.Data;

@Data
public class LoginDto {
	
	private String email;
	private String password;
	
	
	public String getUsernameOrEmail() {
		return email;
	}
	public void setUsernameOrEmail(String usernameOrEmail) {
		this.email = usernameOrEmail;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public LoginDto(String usernameOrEmail, String password) {
		super();
		this.email = usernameOrEmail;
		this.password = password;
	}
	public LoginDto() {
		super();
	}
	@Override
	public String toString() {
		return "LoginDto [usernameOrEmail=" + email + ", password=" + password + "]";
	}

}
