# Online Stationery Shop - Project Documentation

## Project Title

**Online Stationery Shop**

## Objective

The objective of this project is to build a full-stack web application for managing and purchasing stationery products online.  
It provides:

- A secure backend with authentication and role-based authorization
- Product and order management APIs
- A responsive frontend for browsing products, login, and cart operations

The system is designed for two types of users:

- **ADMIN**: Manages products (add, update, delete)
- **USER**: Views products and places orders

## Technologies Used

### Backend

- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- Spring Security
- JWT (io.jsonwebtoken)
- Maven
- MySQL
- Lombok

### Frontend

- HTML5
- CSS3 (responsive design)
- JavaScript (Fetch API, localStorage)

### Tools

- Postman (API testing)
- GitHub (source code hosting)

## System Architecture

The project follows a layered architecture:

1. **Controller Layer**
   - Handles HTTP requests and responses
   - Endpoints for authentication, products, and orders

2. **Service Layer**
   - Contains business logic
   - Coordinates operations between controllers and repositories

3. **Repository Layer**
   - Uses Spring Data JPA
   - Provides CRUD operations for entities

4. **Model Layer**
   - Entity classes mapped to database tables

5. **Security Layer**
   - JWT generation and validation
   - Authentication filter for bearer tokens
   - Role-based access control

### Request Flow (High-Level)

1. Client sends request to REST API
2. JWT filter validates token (except public endpoints)
3. Controller receives authorized request
4. Service processes business logic
5. Repository interacts with MySQL database
6. Response is returned to client

## Database Design

### 1) users table

- `id` (BIGINT, PK, auto-increment)
- `username` (VARCHAR, unique, not null)
- `password` (VARCHAR, encoded, not null)
- `role` (VARCHAR: ADMIN / USER, not null)

### 2) products table

- `id` (BIGINT, PK, auto-increment)
- `name` (VARCHAR, not null)
- `price` (DOUBLE, not null)
- `category` (VARCHAR, not null)
- `image_url` (VARCHAR, nullable)

### 3) orders table

- `id` (BIGINT, PK, auto-increment)
- `user_id` (BIGINT, not null)
- `total_amount` (DOUBLE, not null)
- `status` (VARCHAR, not null)

### Relationships

- Current design stores `userId` in orders as a field.
- Can be enhanced later to use proper JPA relationships (`@ManyToOne` from Order to User).

## Features

### Authentication and Authorization

- Register API (`/register`)
- Login API (`/login`) with JWT token generation
- Secure all APIs except login/register
- Role-based API access:
  - ADMIN: add/update/delete products
  - USER + ADMIN: view products

### Product Module

- Create product
- Get all products
- Get product by ID
- Update product
- Delete product

### Order Module

- Place order
- Get orders by user ID

### Frontend

- Multi-page responsive UI:
  - Home, Products, Categories, About, Contact, Login, Cart
- Dynamic product listing using backend Fetch API
- JWT token storage in localStorage
- Role-based redirect after login (admin/user dashboard)
- Cart system:
  - Add to cart
  - Remove item
  - Persist cart in localStorage

### Testing Support

- Postman collection for all endpoints
- Ready request examples for auth, product, and order APIs

## Future Scope

1. Implement full JWT refresh token flow
2. Add proper exception handling with standardized API error responses
3. Add input validation using Bean Validation (`@Valid`)
4. Link orders with order items and products (normalized order schema)
5. Add payment gateway integration
6. Build admin panel for dashboard analytics and inventory control
7. Add search, filtering, and pagination for products
8. Add profile management and password reset
9. Add Docker support and CI/CD pipeline
10. Deploy frontend and backend on cloud (with environment-based config)

## Conclusion

The Online Stationery Shop project delivers a solid full-stack foundation with secure role-based access, core e-commerce modules, and a modern responsive frontend.  
It is implementation-ready for academic use and can be extended into a production-grade platform with the future enhancements listed above.
