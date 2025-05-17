# User Management System

A comprehensive user management system built with Angular 17 for the frontend and Node.js/Express for the backend. This system includes features like user authentication, profile management, email verification, and admin functionality.

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
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens)
- **Email**: Nodemailer with Ethereal for email verification
- **API Documentation**: Swagger/OpenAPI
- **Validation**: Joi
- **Security**: bcryptjs for password hashing

### Frontend
- **Framework**: Angular 17
- **Language**: TypeScript
- **Styling**: Bootstrap 5
- **State Management**: RxJS
- **Build Tool**: Angular CLI
- **Routing**: Angular Router
- **Forms**: Angular Reactive Forms
- **HTTP Client**: Angular HttpClient with interceptors

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

## Deployment Instructions

### Backend Deployment (Required)
1. Deploy the Backend directory to a Node.js-compatible hosting service (recommended: Heroku, DigitalOcean, or AWS)
2. Set up environment variables from `.env.example`
3. Configure a MySQL database
4. Set up email service credentials
5. The backend will run on port 4000 by default

### Frontend Deployment (Netlify)
1. Push your code to GitHub
2. Go to Netlify (https://netlify.com)
3. Create a new site from Git
4. Connect your GitHub repository
5. In the build settings:
   - Build command: `npm run build`
   - Publish directory: `Frontend/dist`
   - Base directory: `Frontend`
6. Add environment variables:
   - `NEXT_PUBLIC_API_URL`: Your backend URL (from step 1)
   - `NEXT_PUBLIC_EMAIL_USER`: Your email service username
   - `NEXT_PUBLIC_EMAIL_PASS`: Your email service password
7. Deploy the project

### Development Setup
1. Backend: Run `docker-compose up -d` in the root directory
2. Frontend: Run `ng serve` in the Frontend directory
3. Access the application at http://localhost:4200
4. The backend will be accessible at http://localhost:4000

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

---

*This project was created using modern web development practices and follows industry standards for security and performance.*
