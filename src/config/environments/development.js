
module.exports = {
    PORT: process.env.PORT,
    DB: {
        username: process.env.DB_USER_DEV,
        password: process.env.DB_PASSWORD_DEV,
        database: process.env.DB_NAME_DEV,
        host: process.env.DB_HOST_DEV,
        dialect: 'mysql',
    },
};
