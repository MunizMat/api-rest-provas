import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Availableprova from '../models/Availableprova';
import ProvaRealizada from '../models/Provarealizada';
import User from '../models/User';

const models = [Availableprova, User, ProvaRealizada];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
