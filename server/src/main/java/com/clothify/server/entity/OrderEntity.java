package com.clothify.server.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Data
public class OrderEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private LocalDateTime date;

    @Embedded
    private Address address;

    @Enumerated(EnumType.STRING)
    private OrderState orderState;

    @ManyToOne
    @JoinColumn(name = "buyer_id", nullable = false)
    @JsonBackReference
    private Buyer buyer;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "order_product",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private Set<Product> products;


    public OrderEntity() {
        this.orderState = OrderState.PENDING;
        this.products = new HashSet<>();
    }

    public void addProduct(Product product) {
        this.products.add(product);
    }


}
