
module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        role: DataTypes.STRING,
        fkStatus: DataTypes.INTEGER,
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: true,
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: true,
        },
    }, {
        tableName: 'roles',
    });
    Role.associate = function (models) {
    // associations can be defined here
        Role.belongsTo(models.Status, {
            foreignKey: 'fkStatus',
            sourceKey: 'id',
        });
    };
    return Role;
};
