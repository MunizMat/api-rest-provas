import Sequelize, { Model } from 'sequelize';

export default class Availableprova extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        unique: {
          msg: 'Prova já existe',
        },
      },
      tipo: Sequelize.STRING,
      ano: Sequelize.STRING,
      gabarito: Sequelize.STRING,
      num_questoes: Sequelize.INTEGER,
      respostas: Sequelize.STRING,
      tempo: Sequelize.FLOAT,
      opcoes: Sequelize.STRING,
      dia: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }
}
