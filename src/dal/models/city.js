
module.exports = (sequelize, DataTypes) => {
    const City = sequelize.define('City', {
        city: DataTypes.STRING,
        fkStatus: DataTypes.INTEGER,
    }, {});
    City.associate = function (models) {
        City.belongsTo(models.Role, {
            foreignKey: 'fkStatus',
            sourceKey: 'id',
        });
    };
    return City;
};
