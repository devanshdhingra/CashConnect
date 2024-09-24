# CashConnect API Documentation
=====================================

## Overview

CashConnect is a secure and user-friendly banking system built with Node.js, Express, and MongoDB. This API provides endpoints for user registration, peer-to-peer payments, and transaction history retrieval.

## Endpoints

### 1. User Registration

#### POST /register

* **Request Body:**
	+ `name`: string (required)
	+ `email`: string (required)
	+ `password`: string (required)
* **Response:** User create

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
```

### 2. Peer-to-Peer Payments

#### POST /pay

* **Request Body:**
	+ `sender`: string (required)
	+ `receiver`: string (required)
    + `amount` : string (required)
	+ `password`: string (required)
* **Response:** Transaction successful

```json
{
  "sender": "John Doe",
  "receiver": "johndoe@example.com",
  "amount": "adam@exmaple.com",
  "password": "password123"
}
```

### 3. Transaction History

#### POST /transactions

* **Request Body:**
	+ `email`: string (required)
	+ `password`: string (required)
* **Response:** JSON array of transaction objects


```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

## Security

* Passwords are hashed and stored securely using bcrypt.
* Authentication is required for all endpoints except /register.

## Getting Started

1. Clone the repository: `https://github.com/devanshdhingra/CashConnect.git`
2. Install dependencies: `npm install`
3. Use the desired mongoDb connection string
3. Start the server: `node index.js`
4. Open your browser and navigate to `http://localhost:3000`

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request. Make sure to include a clear description of your changes and follow standard commit message guidelines.

## License

This project is released under the Apache-2.0 License.

