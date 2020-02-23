
module.exports = (sequelize, DataTypes) => {
    const Operacion = sequelize.define('Operacion', {
        operacion: DataTypes.STRING,
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
    }, {
        tableName: 'operaciones',
    });
    Operacion.associate = function (models) {
    // associations can be defined here
    };
    return Operacion;
};
