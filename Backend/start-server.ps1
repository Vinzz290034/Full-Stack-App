# Set environment variables
$env:NODE_ENV = "development"
$env:PORT = "4000"
$env:DB_HOST = "localhost"
$env:DB_PORT = "3306"
$env:DB_NAME = "employee_management"
$env:DB_USER = "root"
$env:DB_PASSWORD = "Anyaforger_290034"
$env:JWT_SECRET = "your_jwt_secret_key_here"
$env:JWT_REFRESH_SECRET = "your_refresh_token_secret_here"
$env:JWT_EXPIRATION = "1h"
$env:JWT_REFRESH_EXPIRATION = "7d"
$env:SMTP_HOST = "smtp.ethereal.email"
$env:SMTP_PORT = "587"
$env:SMTP_USER = "your_ethereal_username"
$env:SMTP_PASSWORD = "your_ethereal_password"
$env:EMAIL_FROM = "noreply@employeeapp.com"
$env:CORS_ORIGINS = "http://localhost:4200,http://localhost:3000"

# Start the server
Write-Host "Starting server..." -ForegroundColor Cyan
node server.js
