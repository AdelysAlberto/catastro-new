
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        dni: DataTypes.INTEGER,
        cuil: DataTypes.INTEGER,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        fkRole: DataTypes.INTEGER,
        address: DataTypes.STRING,
        fkCity: DataTypes.INTEGER,
        fkCountry: DataTypes.INTEGER,
        phone: DataTypes.STRING,
        mobile: DataTypes.STRING,
        photo: DataTypes.STRING,
        fkStatus: DataTypes.INTEGER,
    }, {});
    User.associate = function (models) {
    // associations can be defined here
        User.belongsTo(models.Role, {
            foreignKey: 'fkRole',
            sourceKey: 'id',
        });
        User.belongsTo(models.City, {
            foreignKey: 'fkCity',
            sourceKey: 'id',
        });
        User.belongsTo(models.Country, {
            foreignKey: 'fkCountry',
            sourceKey: 'id',
        });
        User.belongsTo(models.Status, {
            foreignKey: 'fkStatus',
            sourceKey: 'id',
        });
    };
    return User;
};
