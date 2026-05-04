# Postman API Testing

Import `Online-Stationery-Shop.postman_collection.json` into Postman.

## Suggested run order

1. Register Admin
2. Register User
3. Login Admin (stores `adminToken`)
4. Login User (stores `userToken`)
5. Create Product (stores `productId`)
6. Get/Update/Delete Product
7. Place Order
8. Get User Orders

## Notes

- Collection variable `baseUrl` is set to `http://localhost:8080`.
- Protected endpoints use `Authorization: Bearer <token>`.
- `GET /products` and `GET /products/{id}` can use `userToken` or `adminToken`.
- `POST/PUT/DELETE /products` should use `adminToken`.
