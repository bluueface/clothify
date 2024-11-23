package com.clothify.server.config;

import com.clothify.server.entity.*;
import com.clothify.server.repository.CategoryRepository;
import com.clothify.server.repository.ProductRepository;
import com.clothify.server.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Component
public class DataLoader {

    @Bean
    CommandLineRunner initData(
            CategoryRepository categoryRepository,
            ProductRepository productRepository, UserRepository userRepository) {
        return args -> {

            // Subcategories data
            SubCategory subCategory1 = new SubCategory("Coats & Jackets");
            SubCategory subCategory2 = new SubCategory("Hoodies & Sweatshirts");
            SubCategory subCategory3 = new SubCategory("Pants");
            SubCategory subCategory4 = new SubCategory("Boots");
            SubCategory subCategory5 = new SubCategory("Sneakers");
            SubCategory subCategory6 = new SubCategory("Jewellery & Watches");
            SubCategory subCategory7 = new SubCategory("Hats and Caps");

            // Categories data
            Category category1 = new Category("Clothing");
            category1.addSubCategory(subCategory1);
            category1.addSubCategory(subCategory2);
            category1.addSubCategory(subCategory3);
            Category category2 = new Category("Shoes");
            category2.addSubCategory(subCategory4);
            category2.addSubCategory(subCategory5);
            Category category3 = new Category("Accessories");
            category3.addSubCategory(subCategory6);
            category3.addSubCategory(subCategory7);

            categoryRepository.save(category1);
            categoryRepository.save(category2);
            categoryRepository.save(category3);

            // Product data
            Product product1 = new Product("Bomber Jacket 1", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 200, subCategory1);
            product1.addRating(new Rating(4.5f, "Good product"));
            product1.addRating(new Rating(5f, "Super !"));
            product1.addRating(new Rating(3, "Not bad"));
            Product product12 = new Product("Bomber Jacket 2", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 200, subCategory1);
            Product product13 = new Product("Bomber Jacket 3", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 200, subCategory1);
            Product product14 = new Product("Bomber Jacket 4", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 200, subCategory1);
            Product product15 = new Product("Bomber Jacket 5", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 200, subCategory1);
            Product product16 = new Product("Bomber Jacket 6", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 200, subCategory1);
            Product product17 = new Product("Bomber Jacket 7", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 200, subCategory1);
            Product product18 = new Product("Bomber Jacket 8", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 200, subCategory1);
            Product product19 = new Product("Bomber Jacket 9", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 200, subCategory1);
            Product product110 = new Product("Bomber Jacket 10", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 200, subCategory1);
            Product product111 = new Product("Bomber Jacket 11", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 200, subCategory1);
            Product product112 = new Product("Bomber Jacket 12", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 200, subCategory1);
            Product product2 = new Product("Basic Hoodie", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 50, subCategory2);
            Product product3 = new Product("Cargo Pant", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 200, subCategory3);
            Product product4 = new Product("Chelsea Boot", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 120, subCategory4);
            Product product5 = new Product("Super star Addidas", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 300, subCategory5);
            Product product6 = new Product("Jewellery 1", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 40, subCategory6);
            Product product7 = new Product("Watch 1", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 300, subCategory6);
            Product product8 = new Product("Hat 1", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 20, subCategory7);
            Product product9 = new Product("Cap 1", "desc", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 20, subCategory7);
            productRepository.saveAll(List.of(product1, product12, product13, product14, product15, product16, product17, product18, product19, product110, product111, product112, product2, product3, product4, product5, product6, product7, product8, product9));


            // Buyer and Order data:
            Address address = new Address("Street 1", "Fairfield", "Iowa", "525500", "US");

            OrderEntity order1 = new OrderEntity();
            order1.setDate(LocalDateTime.now());
            order1.setAddress(address);
            order1.addProduct(product1);
            // Admin data

            SupAdmin supAdmin = new SupAdmin();
            supAdmin.setFirstName("Admin");
            supAdmin.setLastName("Admin");
            supAdmin.setEmail("admin@gmail.com");
            supAdmin.setPassword("123");
            supAdmin.setAddress(address);

            Seller seller = new Seller();
            seller.setFirstName("Seller");
            seller.setLastName("Seller");
            seller.setEmail("seller@gmail.com");
            seller.setPassword("123");
            seller.setAddress(address);


            Buyer buyer1 = new Buyer();
            buyer1.setFirstName("Aziz");
            buyer1.setLastName("Ouadoud");
            buyer1.setEmail("test@gmail.com");
            buyer1.setPassword("123");
            buyer1.setAddress(address);
            buyer1.addOrder(order1);
            userRepository.saveAll(List.of(supAdmin, seller, buyer1));


        };
    }
}