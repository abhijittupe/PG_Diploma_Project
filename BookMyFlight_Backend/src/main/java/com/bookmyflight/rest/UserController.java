package com.bookmyflight.rest;

import java.util.Base64;
import java.util.Base64.Decoder;
import java.util.Base64.Encoder;
import java.util.Collection;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bookmyflight.bean.Login;
import com.bookmyflight.entity.User;
import com.bookmyflight.exception.UserException;
import com.bookmyflight.service.UserService;


@CrossOrigin()
@RestController
public class UserController {
	
	@Autowired
	private UserService userservice;
	

	//Post request on user body for adding user in the database
	@PostMapping(value = "/createuser",consumes = "application/json")
	public String createUser(@RequestBody User user) {
	
		Encoder encoder=Base64.getEncoder();
		String encrypt=encoder.encodeToString(user.getPassword().getBytes());
		user.setPassword(encrypt);
		int uid;
		try {
			uid = userservice.createUser(user);
			return "User added successfully with user id" + uid; 
		} catch (UserException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return ""+e.getMessage();
		}
		
	}
	
	//Get request to fetch user based on user id
	@GetMapping(value="/get/{uid}",produces="application/json")
	public ResponseEntity<?> getUser(@PathVariable int uid)  {
		
		User u=null;
		 try {
			u=userservice.fetchUserById(uid);
			Decoder decoder=Base64.getDecoder();
			String password=new String(decoder.decode(u.getPassword()));
			System.out.println("Password is"+password);
			return new ResponseEntity<User>(u,HttpStatus.OK);
		} catch (UserException e) {
			
			e.printStackTrace();
			return new ResponseEntity<String>(e.getMessage(),HttpStatus.NOT_FOUND);
		}

	}
	
	//Get request for authenticating user
	@GetMapping(value="/auth/{username}/{password}" ,produces="application/json")
	public ResponseEntity<?> authenticate(@PathVariable String username,@PathVariable String password) {
		Login login=new Login();
		login.setUsername(username);
		login.setPassword(password);
		User user=userservice.validate(login);
		if(user!=null) {
			user.setPassword(password);
			return new ResponseEntity<User>(user, HttpStatus.OK);
		}else {
			return new ResponseEntity<String>("Invalid username or password",HttpStatus.NOT_FOUND);
		}
	}
	
	//Get request for logging out user
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		session.invalidate();	//destroy the session
		return "logged out successfully";
	}
	
	@GetMapping(value = "/getall", produces = "application/json")
    public ResponseEntity<Collection<User>> getAllUsers() {
        Collection<User> users = userservice.fetchAllUsers();
        if (users.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            Decoder decoder = Base64.getDecoder();
            for (User user : users) {
                String password = new String(decoder.decode(user.getPassword()));
                user.setPassword(password);
            }
            return new ResponseEntity<>(users, HttpStatus.OK);
        }
    }
	
	
	@DeleteMapping(value = "/delete/{uid}")
    public ResponseEntity<String> deleteUser(@PathVariable int uid) {
        try {
            userservice.deleteUserById(uid);
            return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
        } catch (UserException e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
	
	@PutMapping(value = "/edit/{uid}", consumes = "application/json")
    public ResponseEntity<?> updateUser(@PathVariable int uid, @RequestBody User updatedUser) {
        try {
            User existingUser = userservice.fetchUserById(uid);
            if (existingUser == null) {
                return new ResponseEntity<>("User not found with ID: " + uid, HttpStatus.NOT_FOUND);
            }

            // Update user details
            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setFname(updatedUser.getFname());
            existingUser.setPhone(updatedUser.getPhone());
            existingUser.setPassword(updatedUser.getPassword());
            // ... (update other user properties as needed)

            userservice.updateUser(existingUser);
            return new ResponseEntity<>("User updated successfully", HttpStatus.OK);
        } catch (UserException e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }
	
}