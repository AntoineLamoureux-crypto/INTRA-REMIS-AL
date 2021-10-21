package com.intra;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service("UserService")
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public User saveUser(User user) {
        int random_int = (int)Math.floor(Math.random()*(user.getGuessUserNumber()-1+1)+1);
        user.setRandomNumber(random_int);
        userRepository.save(user);
        return user;
    }

    @Transactional
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Transactional
    public UserGuessResponse checkIfLatestInsertedUserWon() {
        List<User> userList = userRepository.findAll();
        User latestInsertedUser = userList.get(userList.size()-1);
        UserGuessResponse userGuessResponse = new UserGuessResponse();
        userGuessResponse.setUserRandomNumber(latestInsertedUser.getRandomNumber());
        String result = latestInsertedUser.getGuessUserNumber() == latestInsertedUser.getRandomNumber() ? "Bravo!" : "Manqué";
        userGuessResponse.setResult(result);
        return userGuessResponse;
    }

}

