package com.example.simpleWebApp.controller;

import com.example.simpleWebApp.entity.Adresses;
import com.example.simpleWebApp.entity.User;
import com.example.simpleWebApp.service.AdressessService;
import com.example.simpleWebApp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("")
public class UserController {

    private final UserService userService;
    private final AdressessService adressessService;

    @Autowired
    public UserController(UserService userService, AdressessService adressessService){
        this.userService = userService;
        this.adressessService = adressessService;
    }

    @PostMapping("/save-user")
    public void saveUser(@RequestBody User user){
        userService.saveUser(user);
    }

    @GetMapping("/display-users")
    public List<User> displayUsers(){
        return userService.displayUsers();
    }

    @GetMapping("display-users/{id}")
    public Optional<User> getUserById(@PathVariable Long id){
        return userService.getUserById(id);
    }

    @DeleteMapping("/delete-user/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
        adressessService.deleteAdressess(id);
    }


}
