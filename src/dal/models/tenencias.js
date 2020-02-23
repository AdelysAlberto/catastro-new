
module.exports = (sequelize, DataTypes) => {
    const Tenencia = sequelize.define('Tenencia', {
        tenencia: DataTypes.STRING,
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
        tableName: 'tenencias',
    });
    Tenencia.associate = function (models) {
    // associations can be defined here
    };
    return Tenencia;
};
