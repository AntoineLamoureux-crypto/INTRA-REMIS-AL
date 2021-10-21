package com.intra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping(value = "/save/user")
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @GetMapping(value = "/get/all/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping(value = "/get/latest/inserted/user")
    public UserGuessResponse checkIfLatestInsertedUserWon() {
        return userService.checkIfLatestInsertedUserWon();
    }

}
