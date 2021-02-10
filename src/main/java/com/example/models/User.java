package com.example.models;
import java.util.Random;

public class User {
    private int id;
    private String username;
    private String password;
    private String firstname;
    private String lastname;
    private String role;

    Random rand = new Random();

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstname() {
        return this.firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return this.lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getRole(){
        return this.role;
    }

    public void setRole(String role){
        this.role = role;
    }

    public User() {
    }

    public User(String username, String password, String firstname, String lastname, String role) {
        this.id = rand.nextInt(10000);
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.role = role;
    }
    
    
}

//static var id that auto increments each time the user object is called
//rand num, timestamp??
