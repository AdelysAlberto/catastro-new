
module.exports = (sequelize, DataTypes) => {
    const DatosTerreno = sequelize.define('DatosTerreno', {
        fkDocumento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fkTopografia: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fkForma: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fkTenencia: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        frente: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        profundidad: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        area: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        frente_tipo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        prof_tipo: {
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
        tableName: 'datosTerrenos',
        indexes: [
            {
                unique: true,
                fields: [ 'fkDocumento' ],
            },
        ],
    });
    DatosTerreno.associate = function (models) {
    // associations can be defined here
        DatosTerreno.belongsTo(models.Documento, {
            foreignKey: 'fkDocumento',
            sourceKey: 'id',
        });
        DatosTerreno.belongsTo(models.Topografia, {
            foreignKey: 'fkTopografia',
            sourceKey: 'id',
        });
        DatosTerreno.belongsTo(models.Forma, {
            foreignKey: 'fkForma',
            sourceKey: 'id',
        });
        DatosTerreno.belongsTo(models.Tenencia, {
            foreignKey: 'fkTenencia',
            sourceKey: 'id',
        });
    };
    return DatosTerreno;
};
