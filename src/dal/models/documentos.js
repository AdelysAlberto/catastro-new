module.exports = (sequelize, DataTypes) => {
    const Documento = sequelize.define('Documento', {
        fkPersona: {
            type: DataTypes.STRING(16),
            allowNull: false,
        },
        fkOperacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fkTipoUso: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: false,
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
    Documento.associate = function (models) {
    // associations can be defined here
        Documento.belongsTo(models.Persona, {
            foreignKey: 'fkPersona',
            sourceKey: 'cedula',
        });
        Documento.belongsTo(models.TipoUso, {
            foreignKey: 'fkTipoUso',
            sourceKey: 'id',
        });
        Documento.belongsTo(models.Operacion, {
            foreignKey: 'fkOperacion',
            sourceKey: 'id',
        });
    };
    return Documento;
};
