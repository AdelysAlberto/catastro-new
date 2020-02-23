
module.exports = (sequelize, DataTypes) => {
    const TipoUso = sequelize.define('TipoUso', {
        uso: DataTypes.STRING,
        detalle: DataTypes.STRING,
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
        tableName: 'tipoUsos',
    });
    TipoUso.associate = function (models) {
    // associations can be defined here
    };
    return TipoUso;
};
