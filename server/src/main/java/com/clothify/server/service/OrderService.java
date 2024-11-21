package com.clothify.server.service;

import com.clothify.server.entity.OrderEntity;

import java.util.List;
import java.util.Optional;

public interface OrderService {
    List<OrderEntity> getBuyerOrders(long buyerId);

    Optional<OrderEntity> getById(long id);

    OrderEntity save(OrderEntity order);

    void delete(long id);
}
