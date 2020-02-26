
module.exports = (sequelize, DataTypes) => {
    const Arquitectos = sequelize.define('Arquitectos', {
        sub: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        resolution: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isPrincipal: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fkStatus: {
            type: DataTypes.INTEGER,
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
        tableName: 'arquitectos',
    });
    Arquitectos.associate = function (models) {
    // associations can be defined here
        Arquitectos.belongsTo(models.Status, {
            foreignKey: 'fkStatus',
            sourceKey: 'id',
        });
    };
    return Arquitectos;
};
