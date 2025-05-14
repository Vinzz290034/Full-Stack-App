# Full Stack Application

This is a full-stack web application with a modern Angular frontend and a Node.js/Express backend. The application provides user authentication, profile management, and administrative features.

## Project Structure

```
Full-Stack-App/
├── Backend/          # Node.js/Express API server
│   ├── _helpers/     # Helper functions and middleware
│   ├── _middleware/  # Express middleware
│   ├── accounts/     # Authentication and user management
│   ├── config.json   # Configuration file
│   └── server.js     # Main server file
│
└── Frontend/        # Angular application
    ├── src/
    │   ├── app/           # Application code
    │   │   ├── account/     # Authentication components
    │   │   ├── admin/       # Admin dashboard
    │   │   ├── home/        # Public pages
    │   │   ├── profile/     # User profile
    │   │   ├── _components/ # Shared components
    │   │   ├── _helpers/    # Helper services
    │   │   ├── _models/     # Data models
    │   │   └── _services/   # Core services
    │   └── environments/    # Environment configurations
    └── package.json         # Frontend dependencies
```

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MySQL with Sequelize ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Email**: Nodemailer for email verification and password reset
- **API Documentation**: Swagger/OpenAPI
- **Validation**: Joi
- **Security**: bcryptjs for password hashing

### Frontend
- **Framework**: Angular 17
- **Language**: TypeScript
- **Styling**: Bootstrap 5
- **State Management**: RxJS
- **Testing**: Karma, Jasmine, Protractor
- **Build Tool**: Angular CLI

## Prerequisites

- Node.js (v16 or later)
- npm (v8 or later)
- MySQL Server (v5.7 or later)
- Angular CLI (for frontend development)

## Getting Started

### 1. Clone the repository
```bash
git clone <repository-url>
cd Full-Stack-App
```

### 2. Backend Setup
```bash
# Navigate to backend directory
cd Backend

# Install dependencies
npm install

# Configure the database
# 1. Create a MySQL database named 'node-mysql-signup-verification-api'
# 2. Update config.json with your database credentials

# Start the backend server
npm start
# or for development with auto-reload
npm run start:dev
```

### 3. Frontend Setup
```bash
# Navigate to frontend directory
cd ../Frontend

# Install dependencies
npm install

# Start the development server
ng serve
# or
npm start
```

## Development

### Backend API
- Runs on `http://localhost:4000` by default
- API documentation available at `http://localhost:4000/api-docs`

### Frontend Application
- Runs on `http://localhost:4200` by default
- Auto-reloads when source files change

## Project Features

### Authentication
- User registration with email verification
- Login/Logout
- Password reset functionality
- JWT-based authentication
- Role-based access control

### User Management
- User profile management
- Admin dashboard for user administration
- Secure password storage with bcrypt

### API Endpoints
- RESTful API design
- Comprehensive API documentation with Swagger
- Input validation and error handling

## Deployment

### Backend
1. Set environment variables for production
2. Configure HTTPS
3. Use PM2 or similar process manager for Node.js
4. Set up a reverse proxy (Nginx, Apache)

### Frontend
1. Build for production: `ng build --configuration production`
2. Deploy the contents of `dist/` to a web server
3. Configure the base URL to point to your backend API

## Testing

### Backend Tests
```bash
cd Backend
npm test
```

### Frontend Tests
```bash
cd Frontend
# Unit tests
ng test

# End-to-end tests
ng e2e
```

## Security Considerations

- Always use HTTPS in production
- Keep your JWT secret key secure
- Use strong database credentials
- Regularly update dependencies for security patches
- Implement rate limiting and request validation
- Use environment variables for sensitive configuration

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

*This project was created using modern web development practices and follows industry standards for security and performance.*
