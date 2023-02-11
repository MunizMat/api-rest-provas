/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('availableprovas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ano: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gabarito: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      num_questoes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      respostas: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      tempo: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      opcoes: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dia: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('availableprovas');
  },
};
