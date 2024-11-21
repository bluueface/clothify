package com.clothify.server.service;

import com.clothify.server.entity.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    List<Category> getAll();

    Optional<Category> getById(long id);

    Category save(Category category);

    void delete(long id);
}
