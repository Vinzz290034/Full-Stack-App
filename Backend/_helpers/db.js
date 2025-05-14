
const config = require('config.json');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize().catch(err => {
    console.error('Failed to initialize database:');
    console.error(err);
    process.exit(1);
});

async function initialize() {
    console.log('Initializing database...');
    const { host, port, user, password, database } = config.database;
    
    try {
        // Connect to MySQL server
        console.log(`Connecting to MySQL at ${host}:${port}...`);
        const connection = await mysql.createConnection({ 
            host, 
            port, 
            user, 
            password,
            connectTimeout: 10000
        });
        
        console.log('MySQL server connected, checking database...');
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
        console.log(`Database '${database}' verified`);
        await connection.end();

        // Connect to the database
        console.log('Initializing Sequelize...');
        const sequelize = new Sequelize(database, user, password, { 
            dialect: 'mysql',
            logging: console.log,
            define: {
                timestamps: true,
                underscored: true
            }
        });

        // Test the connection
        console.log('Testing database connection...');
        await sequelize.authenticate();
        console.log('Database connection successful!');

        // Initialize models
        console.log('Initializing models...');
        db.Account = require('../accounts/account.model')(sequelize);
        db.RefreshToken = require('../accounts/refresh-token.model')(sequelize);

        // Define relationships
        db.Account.hasMany(db.RefreshToken, { onDelete: 'CASCADE' });
        db.RefreshToken.belongsTo(db.Account);

        // Sync all models
        console.log('Syncing database...');
        await sequelize.sync({ alter: true });
        console.log('Database sync completed successfully!');
        
    } catch (error) {
        console.error('Database initialization failed:');
        console.error('Error details:', error.message);
        if (error.original) {
            console.error('Original error:', error.original);
        }
        throw error;
    }
}

