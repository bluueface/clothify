package com.clothify.server.service.impl;

import com.clothify.server.entity.UserEntity;
import com.clothify.server.repository.UserRepository;
import com.clothify.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<UserEntity> getAll() {
        return userRepository.findAll();
    }

    @Override
    public Optional<UserEntity> getById(long id) {
        return userRepository.findById(id);
    }

    @Override
    public UserEntity save(UserEntity product) {
        return userRepository.save(product);
    }

    @Override
    public void delete(long id) {
        userRepository.deleteById(id);
    }
}
