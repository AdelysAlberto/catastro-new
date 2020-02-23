
module.exports = (sequelize, DataTypes) => {
    const Persona = sequelize.define('Persona', {
        cedula: {
            type: DataTypes.STRING(16),
            allowNull: false,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING(80),
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fkUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fkStatus: {
            type: DataTypes.INTEGER,
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
        tableName: 'personas',
        indexes: [
            {
                unique: true,
                fields: [ 'cedula' ],
            },
        ],
    });
    Persona.associate = function (models) {
    // associations can be defined here
        Persona.belongsTo(models.User, {
            foreignKey: 'fkUser',
            sourceKey: 'id',
        });
        Persona.belongsTo(models.Status, {
            foreignKey: 'fkStatus',
            sourceKey: 'id',
        });
    };
    return Persona;
};
