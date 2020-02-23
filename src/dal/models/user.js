
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        cedula: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fkRole: {
            type: DataTypes.INTEGER,
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
        tableName: 'users',
        indexes: [
            {
                unique: true,
                fields: [ 'cedula' ],
            },
        ],
    });
    User.associate = function (models) {
    // associations can be defined here
        User.belongsTo(models.Role, {
            foreignKey: 'fkRole',
            sourceKey: 'id',
        });

        User.belongsTo(models.Status, {
            foreignKey: 'fkStatus',
            sourceKey: 'id',
        });
    };
    return User;
};
