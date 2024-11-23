package com.clothify.server.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Seller extends UserEntity {
    private String businessName;

    @Override
    public String getUserType() {
        return "SELLER";
    }

    @Override
    public boolean isActive() {
        return false;
    }
}
