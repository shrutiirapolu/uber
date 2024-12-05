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
