
module.exports = (sequelize, DataTypes) => {
    const Forma = sequelize.define('Forma', {
        forma: DataTypes.STRING,
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
        tableName: 'formas',
    });
    Forma.associate = function (models) {
    // associations can be defined here
    };
    return Forma;
};
