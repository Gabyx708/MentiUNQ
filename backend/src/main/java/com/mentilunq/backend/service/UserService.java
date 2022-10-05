package com.mentilunq.backend.service;

import com.mentilunq.backend.modelo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mentilunq.backend.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository ;

    @Autowired
    public  UserService(UserRepository userRepository){this.userRepository = userRepository;}

    public User createUser(User user){
       if(!userRepository.findById(user.getEmail()).isPresent()){
           return  userRepository.save(user);
       }
       return  null;
    }

    public List <User> getAllUsers(){
        return  userRepository.findAll();
    }
}
