package com.mentilunq.backend.controllers;
import com.mentilunq.backend.modelo.User;
import com.mentilunq.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){ this.userService = userService; }

    @CrossOrigin
    @RequestMapping(value = "users/create" , method = RequestMethod.POST)
    public  @ResponseBody
    User createUser(@RequestBody User user){
        return userService.createUser(user);
    }

    @CrossOrigin
    @RequestMapping(value = "users/getAll", method = RequestMethod.GET)
    public @ResponseBody List <User> getAllUsers(){
        return userService.getAllUsers();
    }
}
