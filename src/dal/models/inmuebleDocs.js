
module.exports = (sequelize, DataTypes) => {
    const InmuebleDocs = sequelize.define('InmuebleDocs', {
        fkDocumento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        folio: {
            type: DataTypes.STRING(16),
            allowNull: false,
        },
        tomo: {
            type: DataTypes.STRING(16),
            allowNull: false,
        },
        foliodoc: {
            type: DataTypes.STRING(16),
            allowNull: false,
        },
        protocolo: {
            type: DataTypes.STRING(16),
            allowNull: false,
        },
        trimestre: {
            type: DataTypes.STRING(12),
            allowNull: true,
        },
        fecha_folio: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        superficie: {
            type: DataTypes.STRING(16),
            allowNull: false,
        },
        monto: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        registro: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        dirRegistro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
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
        tableName: 'inmuebleDocs',
        indexes: [
            {
                unique: true,
                fields: [ 'fkDocumento' ],
            },
        ],
    });
    InmuebleDocs.associate = function (models) {
    // associations can be defined here
        InmuebleDocs.belongsTo(models.Documento, {
            foreignKey: 'fkDocumento',
            sourceKey: 'id',
        });
    };
    return InmuebleDocs;
};
