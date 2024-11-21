package com.clothify.server.repository;

import com.clothify.server.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    @Query("SELECT p FROM Product p WHERE (:subCategoryId IS NULL OR p.subCategory.id = :subCategoryId)")
    Page<Product> findAllProducts(@Param("subCategoryId") Long subCategoryId, Pageable pageable);
}
