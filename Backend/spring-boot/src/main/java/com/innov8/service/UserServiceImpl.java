package com.innov8.service;

import com.innov8.entity.Users;
import com.innov8.exceptions.UsersException;
import com.innov8.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public Users registerCustomer(Users users) {
        if (users == null)
            throw new UsersException("Invalid users Details");
        return userRepository.save(users);
    }

    @Override
    public Users getUserDetailsByEmail(String email) throws UsersException {
        return userRepository.findByEmail(email).orElseThrow(() -> new UsersException("Users Not found with Email: " + email));
    }

    @Override
    public List<Users> getAllUsersDetails() throws UsersException {
        List<Users> usersList = userRepository.findAll();

        if (usersList.isEmpty())
            throw new UsersException("No Users find");

        return usersList;
    }

    @Override
    public Users updateUserDetailsByEmail(String email, Users users) throws UsersException {
        Users users1 = userRepository.findByEmail(email).orElseThrow(() -> new UsersException("Users Not found with Email: "+email));
        users1.setName(users.getName());
        users1.setPhone(users.getPhone());
        users1.setAddress(users.getAddress());
        users1.setTrack(users.getTrack());
        return userRepository.save(users1);
    }

    @Override
    public Users deleteUserEmail(String email) throws UsersException {
        Users users = userRepository.findByEmail(email).orElseThrow(() -> new UsersException("Users Not found with Email: " + email));
        log.info(users.toString());
        userRepository.delete(users);
        return users;

    }

    @Override
    public List<Users> getAllUsersDetailsByRole(String role) throws UsersException {
        List<Users> usersList = userRepository.findAllByRole("ROLE_"+role.toUpperCase());

        if (usersList.isEmpty())
            throw new UsersException("No Users find");

        return usersList;
    }
}
