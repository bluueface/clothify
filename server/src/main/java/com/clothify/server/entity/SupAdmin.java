package com.clothify.server.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class SupAdmin extends UserEntity {
    @Override
    public String getUserType() {
        return "ADMIN";
    }
}
