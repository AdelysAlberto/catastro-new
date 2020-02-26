module.exports = (sequelize, DataTypes) => {
    const Solicitud = sequelize.define('Solicitud', {
        fkPersona: {
            type: DataTypes.STRING(16),
            allowNull: false,
        },
        fkDocumento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        signature: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fkStatus: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
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
        tableName: 'documentos',
    });
    Solicitud.associate = function (models) {
    // associations can be defined here
        Solicitud.belongsTo(models.Persona, {
            foreignKey: 'fkPersona',
            sourceKey: 'cedula',
        });
        Solicitud.belongsTo(models.Documento, {
            foreignKey: 'fkDocumento',
            sourceKey: 'id',
        });
        Solicitud.belongsTo(models.Status, {
            foreignKey: 'fkStatus',
            sourceKey: 'id',
        });
    };
    return Solicitud;
};
