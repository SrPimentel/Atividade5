const db = require('../../database');

module.exports = {
  adiciona: passagem => {
    return new Promise((resolve, reject) => {
      db.run(
        `
        INSERT INTO Passagem2 (
          Nome ,
          Somente ida ,
          Ida e volta ,
          Origem ,
          Destino ,
          Inicio ,
          Fim ,
          Numero ,
          Idade ,
          Cartao ,
          Nº do Cartao ,
          Vencimento do Cartao ,
          Codigo de Segurança ,
          Parcelado
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
        [passagem.Nome, passagem.Somenteida, passagem.Idaevolta, passagem.Origem, passagem.Destino, passagem.Inicio, passagem.Fim,
          passagem.Numero, passagem.Idade, passagem.Cartao, passagem.NdoCartao, passagem.VencimentodoCartao, passagem.CodigodeSegurança, passagem.Parcelado],
        erro => {
          if (erro) {
            return reject('Erro ao adicionar a Compra da Passagem!');
          }

          return resolve();
        }
      );
    });
  },

  lista: () => {
    return new Promise((resolve, reject) => {
      db.all(` SELECT * FROM Passagem2 `, (erro, resultados) => {
        if (erro) {
          return reject('Erro ao listar as Passagens!');
        }

        return resolve(resultados);
      });
    });
  }
};
