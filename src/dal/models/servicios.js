
module.exports = (sequelize, DataTypes) => {
    const Servicio = sequelize.define('Servicio', {
        fkDocumento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        acueducto: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        cloacas: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        electricidadRural: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        electricidadIndustrial: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        transporte: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        alumbradoPublico: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        vialidad: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        pavimento: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        acera: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        alumbrado: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        gas: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        internet: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        tvcable: {
            type: DataTypes.BOOLEAN,
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
        tableName: 'servicios',
    });
    Servicio.associate = function (models) {
    // associations can be defined here
        Servicio.belongsTo(models.Documento, {
            foreignKey: 'fkDocumento',
            sourceKey: 'id',
        });
    };
    return Servicio;
};
