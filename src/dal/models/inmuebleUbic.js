
module.exports = (sequelize, DataTypes) => {
    const InmuebleUbic = sequelize.define('InmuebleUbic', {
        fkDocumento: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        norte: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mts_norte: {
            type: DataTypes.STRING(12),
            allowNull: false,
        },
        sur: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mts_sur: {
            type: DataTypes.STRING(12),
            allowNull: false,
        },
        este: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        mts_este: {
            type: DataTypes.STRING(12),
            allowNull: true,
        },
        oeste: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mts_oeste: {
            type: DataTypes.STRING(12),
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
        tableName: 'inmuebleUbic',
        indexes: [
            {
                unique: true,
                fields: [ 'fkDocumento' ],
            },
        ],
    });
    InmuebleUbic.associate = function (models) {
    // associations can be defined here
        InmuebleUbic.belongsTo(models.Documento, {
            foreignKey: 'fkDocumento',
            sourceKey: 'id',
        });
    };
    return InmuebleUbic;
};
