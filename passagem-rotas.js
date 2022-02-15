const passagemControlador = require('./passagem-controlador');



module.exports = app => {
  app
    .route('/passagem')
    .get(passagemControlador.lista)
    .post(passagemControlador.adiciona)
    
      
};
