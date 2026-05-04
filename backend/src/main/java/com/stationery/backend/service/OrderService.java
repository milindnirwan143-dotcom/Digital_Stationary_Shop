package com.stationery.backend.service;

import com.stationery.backend.model.Order;

import java.util.List;

public interface OrderService {
    Order placeOrder(Order order);

    List<Order> getOrdersByUserId(Long userId);
}
