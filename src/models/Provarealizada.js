import Sequelize, { Model } from 'sequelize';

export default class Availableprova extends Model {
  static init(sequelize) {
    super.init({
      userId: Sequelize.INTEGER,
      nome: Sequelize.STRING,
      tipo: Sequelize.STRING,
      ano: Sequelize.STRING,
      gabarito: Sequelize.STRING,
      num_questoes: Sequelize.INTEGER,
      respostas: Sequelize.STRING,
      tempo: Sequelize.FLOAT,
      opcoes: Sequelize.STRING,
      dia: Sequelize.STRING,
      data_realizacao: Sequelize.DATE,
      data_finalizacao: Sequelize.DATE,
      tempo_realizacao: Sequelize.FLOAT,
      num_acertos: Sequelize.INTEGER,
      num_erros: Sequelize.INTEGER,
      acertos: Sequelize.STRING,
      erros: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }
}
