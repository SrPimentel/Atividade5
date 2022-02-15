const Passagem = require('./passagem-modelo');
const { InvalidArgumentError, InternalServerError } = require('../erros');

module.exports = {
  adiciona: async (req, res) => {
    try {
      const passagem = new Passagem(req.body);
      await passagem.adiciona();
      
      res.status(201).send(passagem);
    } catch (erro) {
      if (erro instanceof InvalidArgumentError) {
        res.status(422).json({ erro: erro.message });
      } else if (erro instanceof InternalServerError) {
        res.status(500).json({ erro: erro.message });
      } else {
        res.status(500).json({ erro: erro.message });
      }
    }
  },

  lista: async (req, res) => {
    try {
      const passagem = await Passagem.lista();
      res.send(passagem);
    } catch (erro) {
      return res.status(500).json({ erro: erro });
    }
  }
};
