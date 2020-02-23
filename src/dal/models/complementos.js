
module.exports = (sequelize, DataTypes) => {
    const Complemento = sequelize.define('Complemento', {
        fkDocumento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ascensor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        aireAcondicionado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rejas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        closets: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        porcelana: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        puertas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        baños: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cocina: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        servicio: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        oficina: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        garage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        estacionamiento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        observaciones: {
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
        tableName: 'complementos',
    });
    Complemento.associate = function (models) {
    // associations can be defined here
        Complemento.belongsTo(models.Documento, {
            foreignKey: 'fkDocumento',
            sourceKey: 'id',
        });
    };
    return Complemento;
};
