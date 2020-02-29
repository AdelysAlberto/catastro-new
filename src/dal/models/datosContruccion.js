
module.exports = (sequelize, DataTypes) => {
    const DatosContruccion = sequelize.define('DatosContruccion', {
        fkDocumento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        destino: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipoPared: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipoAcabado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipoPintura: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        techoEstructura: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        techoCubierta: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pisos: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ventanas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        puertas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        instalacionElectrica: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        anioConstruccion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        anioRefaccion: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        edadEfectiva: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cantPlantas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cantViviendas: {
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
        tableName: 'datosConstruccion',
    });
    DatosContruccion.associate = function (models) {
    // associations can be defined here
        DatosContruccion.belongsTo(models.Documento, {
            foreignKey: 'fkDocumento',
            sourceKey: 'id',
        });
    };
    return DatosContruccion;
};
