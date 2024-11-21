package com.clothify.server.repository;

import com.clothify.server.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<OrderEntity, Long> {
    List<OrderEntity> findByBuyerId(long buyerId);
}
