Part1 user registration system built using Node.js, Express, and MongoDB. It follows the MVC (Model-View-Controller) architecture, ensuring code modularity and scalability.

---

## Features

1. **User Registration**:

   - Validates user input (e.g., email, password, first name) using `express-validator`.
   - Hashes user passwords using `bcrypt`.
   - Stores user information in MongoDB.
   - Generates an authentication token for the registered user.

2. **Database Connectivity**:

   - Connects to MongoDB using `mongoose`.

3. **Token Generation**:

   - Uses `jsonwebtoken` for creating secure tokens.

4. **Error Handling**:
   - Catches validation and operational errors, responding with appropriate messages.

---

## Project Structure

```plaintext
backend/
├── controllers/           # Contains controller logic
│   └── user.controller.js # User registration controller
├── db/                    # Contains database connection logic
│   └── db.js              # MongoDB connection
├── models/                # Contains Mongoose schemas and models
│   └── user.model.js      # User schema and model
├── routes/                # Contains application routes
│   └── user.routes.js     # User routes
├── services/              # Contains business logic
│   └── user.services.js   # User service functions
├── app.js                 # Main application logic
├── server.js              # Starts the HTTP server
├── .env                   # Environment variables (e.g., DB URI, JWT secret)
```

---

## Prerequisites

- **Node.js**: v14+ (https://nodejs.org/)
- **MongoDB**: A running MongoDB instance
- **npm**: v6+ (comes with Node.js)

---

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```env
   DB_CONNECT=mongodb+srv://<username>:<password>@<cluster_url>/<dbname>?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret
   PORT=8080
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. The server will run at `http://localhost:8080`.

---

## API Endpoints

### User Registration

**Endpoint**: `POST /users/register`

**Request Body**:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

**Validation Rules**:

- `email`: Must be a valid email.
- `fullname.firstname`: Must be at least 3 characters long.
- `password`: Must be at least 6 characters long.

**Response**:

- **Success**: HTTP 201

  ```json
  {
    "token": "<JWT Token>",
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

- **Error**: HTTP 400
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```

---

##USER LOGIN
Endpoint: POST /users/login

Description: The login endpoint allows users to authenticate by providing their email and password. If the credentials are correct, a JWT (JSON Web Token) is generated and returned, which can be used for subsequent authenticated API requests.

Request Body:
{
"email": "john.doe@example.com",
"password": "password123"
}

email: The email address of the user. This should be a valid email format and match the email stored in the database.
password: The password associated with the user's email. The password must be at least 6 characters long.
Validation Rules:
Email:
Must be a valid email address.
Example validation message: "Invalid Email".
Password:
Must be at least 6 characters long.
Example validation message: "Password must be at least 6 characters long".
Process:
Email Validation: The system first validates that the email provided is in the correct format.
User Lookup: The system checks the database for a user with the provided email. If the user is not found, it responds with an error message.
Password Comparison: If the user is found, the system compares the provided password with the hashed password stored in the database using bcrypt. If the password does not match, an error message is returned.
JWT Token Generation: If both the email and password are valid, a JWT token is generated using the jsonwebtoken library. The token is signed with a secret key (usually stored in environment variables). This token will be returned to the user and can be used for future authentication.
Response:
Success: HTTP 200 OK, with a response body that includes the user's details and an authentication token.
{
"token": "<token>",
"user": {
"fullname": {
"firstname": "shruti"
},
"\_id": "6751e1c7864d07d261c648b6",
"email": "shruti@gmail.com",
"password": "$2b$10$k3sNcpV2hEiiDGSLH9o0n.9z1eiOovuJ0zz37yTot2UpiYMxSCGwe",
"\_\_v": 0
}
}
token: A secure JWT token which can be used in the Authorization header for subsequent API requests (e.g., Authorization: Bearer <JWT Token>).
user: Contains the user's details, including the unique \_id, full name, and email.
Error: HTTP 400 Bad Request if validation fails or the credentials are incorrect. The response will include a detailed error message.
{
"message": "invalid email or password"
}

## Key Files Overview

1. **`controllers/user.controller.js`**:

   - Contains the logic for validating input, calling the service layer, and generating JWT tokens.

2. **`db/db.js`**:

   - Handles MongoDB connection using Mongoose.

3. **`models/user.model.js`**:

   - Defines the user schema with methods for password hashing and token generation.

4. **`routes/user.routes.js`**:

   - Defines the `/register` route and applies validation rules.

5. **`services/user.services.js`**:

   - Contains business logic for creating a user in the database.

6. **`app.js`**:

   - Sets up middleware and routes.

7. **`server.js`**:
   - Starts the HTTP server.

---

## Dependencies

- **express**: Web framework
- **mongoose**: MongoDB object modeling
- **bcrypt**: Password hashing
- **jsonwebtoken**: Token generation
- **express-validator**: Request validation
- **dotenv**: Environment variable management

---

## Development Notes

- Ensure MongoDB is running locally or use a cloud provider like MongoDB Atlas.
- Use tools like Postman to test API endpoints.
- Extend the application with additional features like user login or profile management.

---

## License

This project is open-source and available under the MIT License.
