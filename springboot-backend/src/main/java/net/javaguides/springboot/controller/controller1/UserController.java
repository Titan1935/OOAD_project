package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.model.User;
import net.javaguides.springboot.repository.UserRepo;

@CrossOrigin(origins = "http://localhost:4201")
@RestController
@RequestMapping("/api/v2/")
public class UserController {

    // Singleton instance
    private static final UserController instance = new UserController();

    // Private constructor to prevent instantiation from outside
    private UserController() {}

    // Public static method to get the instance
    public static UserController getInstance() {
        return instance;
    }

    @Autowired
    private UserRepo repo;

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User userData) {
        User user = repo.findByUserId(userData.getUserId());
        if (user != null && user.getPassword().equals(userData.getPassword())) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.internalServerError().build();
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User userData) {
        User user = repo.findByUserId(userData.getUserId());
        if (user != null && user.getUserId().equals(userData.getUserId())) {
            return ResponseEntity.internalServerError().build();
        } else {
            return ResponseEntity.ok(repo.save(userData));
        }
    }
}
