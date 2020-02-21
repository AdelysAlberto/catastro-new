
module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        dni: DataTypes.INTEGER,
        cuil: DataTypes.INTEGER,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        mobile: DataTypes.STRING,
        address: DataTypes.STRING,
        fkCountry: DataTypes.INTEGER,
        fkCity: DataTypes.INTEGER,
        fkStatus: DataTypes.INTEGER,
    }, {});
    Client.associate = function (models) {
    // associations can be defined here
        Client.belongsTo(models.City, {
            foreignKey: 'fkCity',
            sourceKey: 'id',
        });
        Client.belongsTo(models.Country, {
            foreignKey: 'fkCountry',
            sourceKey: 'id',
        });
        Client.belongsTo(models.Status, {
            foreignKey: 'fkStatus',
            sourceKey: 'id',
        });
    };
    return Client;
};
