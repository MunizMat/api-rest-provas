/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('provarealizadas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
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
      data_realizacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      data_finalizacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      tempo_realizacao: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      num_acertos: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      num_erros: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      acertos: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      erros: {
        type: Sequelize.STRING,
        allowNull: false,
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
    await queryInterface.dropTable('provarealizadas');
  },
};
