package com.clothify.server.service.impl;

import com.clothify.server.entity.SubCategory;
import com.clothify.server.repository.SubCategoryRepository;
import com.clothify.server.service.SubCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SubCategoryServiceImpl implements SubCategoryService {

    private final SubCategoryRepository subCategoryRepository;

    @Autowired
    public SubCategoryServiceImpl(SubCategoryRepository subCategoryRepository) {
        this.subCategoryRepository = subCategoryRepository;
    }

    @Override
    public List<SubCategory> getAll() {
        return subCategoryRepository.findAll();
    }

    @Override
    public Optional<SubCategory> getById(long id) {
        return subCategoryRepository.findById(id);
    }

    @Override
    public SubCategory save(SubCategory subCategory) {
        return subCategoryRepository.save(subCategory);
    }

    @Override
    public void delete(long id) {
        subCategoryRepository.deleteById(id);
    }
}
