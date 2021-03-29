const {Sequelize} = require('sequelize');

async function up(queryInterface) {
	await queryInterface.createTable('foods', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		title: {
			type: Sequelize.STRING,
			allowNull: false
		},
		description: {
			type: Sequelize.STRING
		},
		price: {
			type: Sequelize.INTEGER,
			allowNull: false
		},
		img: {
			type: Sequelize.STRING
		},
		createdAt: {
			type: Sequelize.DATE,
			allowNull: false
		},
		updatedAt: {
			type: Sequelize.DATE,
			allowNull: false
		}
	});
}

async function down(queryInterface) {
	await queryInterface.dropTable('foods');
}

module.exports = { up, down };
