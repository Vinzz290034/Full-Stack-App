# Backend API for User Authentication System

This is a Node.js backend API built with Express.js that provides user authentication functionality including email verification, JWT authentication, and password reset features.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL
- **ORM**: Sequelize
- **Authentication**: JWT (JSON Web Tokens)
- **Email Service**: Nodemailer
- **API Documentation**: Swagger/OpenAPI
- **Validation**: Joi
- **Security**: bcryptjs for password hashing
- **Development**: Nodemon for hot-reloading

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later recommended)
- npm (comes with Node.js)
- MySQL Server (v5.7 or later)

## Setup Instructions

1. **Clone the repository** (if you haven't already)
   ```bash
   git clone <repository-url>
   cd Full-Stack-App/Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Database Setup**
   - Create a new MySQL database named `node-mysql-signup-verification-api`
   - Update the database configuration in `config.json` with your MySQL credentials:
     ```json
     {
       "database": {
         "host": "localhost",
         "port": 3306,
         "user": "your_username",
         "password": "your_password",
         "database": "node-mysql-signup-verification-api"
       },
       "secret": "your_jwt_secret_key",
       "emailFrom": "your-email@example.com",
       "smtpOptions": {
         "host": "your-smtp-host",
         "port": 587,
         "auth": {
           "user": "your-email@example.com",
           "pass": "your-email-password"
         }
       }
     }
     ```

4. **Environment Variables**
   The application uses the following environment variables:
   - `NODE_ENV`: Set to 'development' or 'production'
   - `PORT`: Port to run the server on (default: 4000 in development)

## Running the Application

### Development Mode
```bash
# Install nodemon globally if you haven't
npm install -g nodemon

# Start the development server
npm run start:dev
```

### Production Mode
```bash
# Install production dependencies only
npm install --production

# Start the server
npm start
```

## API Documentation

Once the server is running, you can access the interactive API documentation at:
```
http://localhost:4000/api-docs
```

## Available Endpoints

- `POST /accounts/authenticate` - Authenticate user
- `POST /accounts/refresh-token` - Refresh access token
- `POST /accounts/revoke-token` - Revoke refresh token
- `POST /accounts/register` - Register a new user
- `POST /accounts/verify-email` - Verify email
- `POST /accounts/forgot-password` - Request password reset
- `POST /accounts/validate-reset-token` - Validate reset token
- `POST /accounts/reset-password` - Reset password
- `GET /accounts` - Get all users (admin only)
- `GET /accounts/:id` - Get user by id
- `POST /accounts` - Create user (admin only)
- `PUT /accounts/:id` - Update user
- `DELETE /accounts/:id` - Delete user

## Security Considerations

- Always use HTTPS in production
- Keep your JWT secret key secure
- Use strong database credentials
- Update the default email configuration
- Regularly update dependencies for security patches

## License

MIT
