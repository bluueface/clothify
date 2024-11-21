package com.clothify.server.controller;

import com.clothify.server.entity.SubCategory;
import com.clothify.server.service.SubCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subcategories")
public class SubCategoryController {

    private final SubCategoryService subCategoryService;

    @Autowired
    public SubCategoryController(SubCategoryService subCategoryService) {
        this.subCategoryService = subCategoryService;
    }

    @GetMapping
    public ResponseEntity<List<SubCategory>> getAllSubCategories() {
        return ResponseEntity.ok(subCategoryService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<SubCategory> getSubCategoryById(@PathVariable long id) {
        return subCategoryService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<SubCategory> createSubCategory(@RequestBody SubCategory subCategory) {
        return ResponseEntity.status(HttpStatus.CREATED).body(subCategoryService.save(subCategory));
    }

    @PutMapping("/{id}")
    public ResponseEntity<SubCategory> updateSubCategory(@PathVariable long id, @RequestBody SubCategory updatedSubCategory) {
        return subCategoryService.getById(id).map(existingSubCategory -> {
            updatedSubCategory.setId(existingSubCategory.getId());
            return ResponseEntity.ok(subCategoryService.save(updatedSubCategory));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSubCategory(@PathVariable long id) {
        if (subCategoryService.getById(id).isPresent()) {
            subCategoryService.delete(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
