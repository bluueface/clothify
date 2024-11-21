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
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    @OneToMany(mappedBy = "category", fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<SubCategory> subCategories;

    public Category() {
        this.subCategories = new ArrayList<>();
    }

    public Category(String name) {
        this();
        this.name = name;
    }

    public void addSubCategory(SubCategory subCategory) {
        subCategory.setCategory(this);
        this.subCategories.add(subCategory);
    }
}
