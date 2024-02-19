package com.example.simpleWebApp.service;
import com.example.simpleWebApp.entity.User;
import com.example.simpleWebApp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;
    // private final AdressessRepository adressessRepository; I will add this after completing the UI just for the user
    // Will also have to initilize it in the UserService probably


    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public void saveUser(User user){
        userRepository.save(user);
    }

    public List<User> displayUsers(){
        return userRepository.findAll();
    }

    public Optional<User> getUserById(long id){
        return userRepository.findById(id);
    }
    public void deleteUser(long id){
        userRepository.deleteById(id);
    }
}
