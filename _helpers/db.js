const config = require('../config.json');  // Ensure the correct path to config.json
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
  const { host, port, user, password, database } = config.database;

  // Create connection to check & create database if not exists
  const connection = await mysql.createConnection({ host, port, user, password });
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
  await connection.end();  // Close the connection after DB check

  // Initialize Sequelize with host & port explicitly set
  const sequelize = new Sequelize(database, user, password, {
    host,       // Ensure host is set
    port,       // Ensure port is set
    dialect: "mysql",
    logging: false, // Optional: Disable logging in console
  });

  // Define models
  db.Account = require('../accounts/account.model')(sequelize);
  db.RefreshToken = require('../accounts/refresh-token.model')(sequelize);

  // Set up relationships
  db.Account.hasMany(db.RefreshToken, { onDelete: 'CASCADE' });
  db.RefreshToken.belongsTo(db.Account);

  // Sync database
  await sequelize.sync({ alter: true });

  console.log("✅ Database initialized successfully");
}
