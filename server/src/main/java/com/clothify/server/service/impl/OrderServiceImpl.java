package com.clothify.server.service.impl;

import com.clothify.server.entity.OrderEntity;
import com.clothify.server.entity.OrderState;
import com.clothify.server.repository.OrderRepository;
import com.clothify.server.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    @Autowired
    public OrderServiceImpl(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @Override
    public List<OrderEntity> getBuyerOrders(long buyerId) {
        return orderRepository.findByBuyerId(buyerId);
    }

    @Override
    public Optional<OrderEntity> getById(long id) {
        return orderRepository.findById(id);
    }

    @Override
    public OrderEntity save(OrderEntity order) {
        return orderRepository.save(order);
    }

    @Override
    public void delete(long id) {
        orderRepository.deleteById(id);
    }

    @Override
    public OrderEntity cancelOrder(long id) {
        return getById(id)
                .map(order -> {
                    order.setOrderState(OrderState.CANCELLED);
                    return orderRepository.save(order);
                })
                .orElseThrow(() -> new IllegalArgumentException("Order not found with ID: " + id));
    }
}
