module.exports = {
    PORT: process.env.PORT,
    DB: {
        username: process.env.DB_USER_PROD,
        password: process.env.DB_PASSWORD_PROD,
        database: process.env.DB_NAME_PROD,
        host: process.env.DB_HOST_PROD,
        dialect: 'mysql',
    },
};
