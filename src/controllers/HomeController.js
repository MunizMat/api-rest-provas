import Availableprova from '../models/Availableprova';

class HomeController {
  async store(req, res) {
    try {
      const prova = await Availableprova.create(req.body);
      return res.json(prova);
    } catch (error) {
      return res.status(400).json({
        errors: ['Prova já existe'],
      });
    }
  }

  async delete(req, res) {
    try {
      const { nome } = req.body;
      const prova = await Availableprova.findOne({ where: { nome } });
      if (!prova) return res.send('Prova não existe');
      prova.destroy();
      return res.json(prova);
    } catch (error) {
      return res.send(error);
    }
  }

  async update(req, res) {
    try {
      if (!req.body.nome) return res.send('É necessário enviar um nome de prova');
      const prova = await Availableprova.findOne({ where: { nome: req.body.nome } });
      if (!prova) return res.send('Prova não existe');
      const novosDados = await prova.update(req.body);
      return res.json(novosDados);
    } catch (error) {
      return res.status(400).json({
        error,
      });
    }
  }
}

export default new HomeController();
