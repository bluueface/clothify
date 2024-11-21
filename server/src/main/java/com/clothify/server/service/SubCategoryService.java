package com.clothify.server.service;

import com.clothify.server.entity.SubCategory;

import java.util.List;
import java.util.Optional;

public interface SubCategoryService {
    List<SubCategory> getAll();

    Optional<SubCategory> getById(long id);

    SubCategory save(SubCategory subCategory);

    void delete(long id);
}
