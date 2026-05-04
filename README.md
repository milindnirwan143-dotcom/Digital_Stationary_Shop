# 🛒 Stationery E-Commerce Website

A full-stack eCommerce web application designed for buying stationery products online. Users can browse products, add items to their cart, and place orders seamlessly.

---

## 📌 Features

- 🔐 User Authentication (Login & Signup)
- 📦 Product Listing & Categories
- 🔍 Search & Filter Products
- 🛒 Add to Cart / Remove from Cart
- 💳 Checkout Functionality
- 📄 Order Management
- 🧑‍💼 Admin Panel (Add/Update/Delete Products)
- 📱 Responsive Design

---

## 🛠️ Tech Stack

### Backend:
- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL

### Frontend:
- HTML
- CSS
- JavaScript

### Tools:
- Git & GitHub
- Postman (API Testing)
- Maven

---

## 📂 Project Structure

```
stationery-ecommerce/
│
├── backend/
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   └── config/
│
├── frontend/
│   ├── index.html
│   ├── css/
│   ├── js/
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```
git clone https://github.com/your-username/stationery-ecommerce.git
cd stationery-ecommerce
```

### 2. Backend Setup
```
cd backend
mvn spring-boot:run
```

### 3. Database Setup
- Create a MySQL database (e.g., `stationery_db`)
- Update `application.properties`:

```
spring.datasource.url=jdbc:mysql://localhost:3306/stationery_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
```

### 4. Frontend Setup
- Open `frontend/index.html` in browser  
(or use Live Server in VS Code)

---

## 🚀 API Endpoints (Sample)

| Method | Endpoint              | Description          |
|--------|----------------------|----------------------|
| GET    | /products            | Get all products     |
| POST   | /products            | Add new product      |
| GET    | /cart                | View cart            |
| POST   | /orders              | Place order          |
| POST   | /auth/login          | User login           |

---

## 📸 Screenshots

> Add your screenshots here

---

## 📈 Future Improvements

- Payment Gateway Integration (Razorpay/Stripe)
- Wishlist Feature
- Order Tracking
- Email Notifications
- Admin Dashboard UI

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📬 Contact

- Name: Vishal Girhepunje  
- Email: your-email@example.com  
- LinkedIn: your-linkedin-profile  

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share it with others!
