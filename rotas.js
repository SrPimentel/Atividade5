
const passagem = require('./src/compras_passagem');

module.exports = app => {
  app.get('/', (req, res) => {res.send('Olá pessoa!')});
  
  
 
  passagem.rotas(app);
};