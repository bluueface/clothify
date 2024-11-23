package com.clothify.server.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Buyer extends UserEntity {

    @OneToMany(mappedBy = "buyer", fetch = FetchType.EAGER, cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<OrderEntity> orders;

    public Buyer() {
        orders = new ArrayList<OrderEntity>();
    }

    public void addOrder(OrderEntity order) {
        order.setBuyer(this);
        orders.add(order);
    }

    @Override
    public String getUserType() {
        return "BUYER";
    }

    @Override
    public boolean isActive() {
        return true;
    }
}