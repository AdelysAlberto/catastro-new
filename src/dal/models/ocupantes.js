
module.exports = (sequelize, DataTypes) => {
    const Ocupante = sequelize.define('Ocupante', {
        fkDocumento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        habitado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha_contrato: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        cant_habitantes: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        renta: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ingreso_familiar: {
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
        tableName: 'ocupantes',
        indexes: [
            {
                unique: true,
                fields: [ 'fkDocumento' ],
            },
        ],
    });
    Ocupante.associate = function (models) {
    // associations can be defined here
        Ocupante.belongsTo(models.Documento, {
            foreignKey: 'fkDocumento',
            sourceKey: 'id',
        });
    };
    return Ocupante;
};
