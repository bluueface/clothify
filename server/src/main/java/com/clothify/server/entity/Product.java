package com.clothify.server.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;

    private String description;

    private String image;

    private double price;

    @ManyToOne
    @JoinColumn(name = "subcategory_id", nullable = false)
    private SubCategory subCategory;

    @OneToMany(mappedBy = "product", fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Rating> ratings;

    @Transient
    private int ratingCount;

    @Transient
    private float ratingRate;


    public Product() {
        this.ratings = new ArrayList<>();
    }

    public Product(String title, String description, String image, double price, SubCategory subCategory) {
        this();
        this.title = title;
        this.description = description;
        this.image = image;
        this.price = price;
        this.subCategory = subCategory;
    }

    public void addRating(Rating rating) {
        rating.setProduct(this);
        this.ratings.add(rating);
    }

    @PostLoad
    public void calculateRatingMetrics() {
        this.ratingCount = ratings.size();
        this.ratingRate = ratingCount > 0
                ? (float) ratings.stream().mapToDouble(Rating::getRate).average().orElse(0.0)
                : 0.0f;
    }
}
