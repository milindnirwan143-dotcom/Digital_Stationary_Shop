package com.stationery.backend.service;

import com.stationery.backend.dto.AuthResponse;
import com.stationery.backend.dto.LoginRequest;
import com.stationery.backend.dto.RegisterRequest;

public interface AuthService {
    AuthResponse register(RegisterRequest request);

    AuthResponse login(LoginRequest request);
}
