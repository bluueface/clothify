package com.clothify.server.service;

import com.clothify.server.entity.Product;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface ProductService {
    Page<Product> getAll(Long subCategoryId, int page, int size);

    Optional<Product> getById(long id);

    Product save(Product product);

    void delete(long id);

    void rateProduct(List<Product> products);

}
