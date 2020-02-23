
module.exports = {
    up: async (queryInterface, Sequelize) => {
        try {
            await queryInterface.addColumn('servicios', 'gas', {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            });
            await queryInterface.addColumn('servicios', 'internet', {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: false,
            });
            await queryInterface.addColumn('servicios', 'tvcable', {
                type: Sequelize.BOOLEAN,
                allowNull: true,
                defaultValue: false,
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
