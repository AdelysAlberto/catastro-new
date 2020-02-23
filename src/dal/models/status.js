
module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define('Status', {
        status: DataTypes.STRING,
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
        tableName: 'status',
    });
    Status.associate = function (models) {
    // associations can be defined here
    };
    return Status;
};
