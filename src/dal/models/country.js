
module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define('Country', {
        country: DataTypes.STRING,
        fkStatus: DataTypes.INTEGER,
    }, {});
    Country.associate = function (models) {
    // associations can be defined here
        Country.belongsTo(models.Status, {
            foreignKey: 'fkStatus',
            sourceKey: 'id',
        });
    };
    return Country;
};
