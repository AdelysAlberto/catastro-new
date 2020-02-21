
module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        role: DataTypes.STRING,
        fkStatus: DataTypes.INTEGER,
    }, {});
    Role.associate = function (models) {
    // associations can be defined here
        Role.belongsTo(models.Status, {
            foreignKey: 'fkStatus',
            sourceKey: 'id',
        });
    };
    return Role;
};
