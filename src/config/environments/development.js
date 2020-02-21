
module.exports = {
    PORT: process.env.PORT,
    DB: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'buildings',
        host: 'localhost',
        dialect: 'mysql',
    },
};
