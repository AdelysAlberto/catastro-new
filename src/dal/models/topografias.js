
module.exports = (sequelize, DataTypes) => {
    const Topografia = sequelize.define('Topografia', {
        topografia: DataTypes.STRING,
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
        tableName: 'topografias',
    });
    Topografia.associate = function (models) {
    // associations can be defined here
    };
    return Topografia;
};
