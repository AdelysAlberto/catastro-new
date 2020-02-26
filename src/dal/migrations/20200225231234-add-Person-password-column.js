
module.exports = {
    up: async (queryInterface, Sequelize) => {
        try {
            await queryInterface.addColumn('personas', 'claveCatastral', {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: '',
                after: 'direccion',
            });
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(e);
        }
    },
    down: (queryInterface, Sequelize) => {
        /*
Add reverting commands here.
Return a promise to correctly handle asynchronicity.

Example:
return queryInterface.dropTable('users');
*/
    },
};
