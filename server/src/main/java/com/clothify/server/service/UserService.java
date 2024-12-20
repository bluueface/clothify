package com.clothify.server.service;

import com.clothify.server.entity.UserEntity;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<UserEntity> getAll();

    Optional<UserEntity> getById(long id);

    UserEntity save(UserEntity product);

    void delete(long id);

    UserEntity login(String email, String password);

    UserEntity setUserActiveStatus(long id, boolean status);
}
