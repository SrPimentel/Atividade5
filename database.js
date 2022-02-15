const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.sqlite');


const PASSAGEM_SCHEMA = `
CREATE TABLE IF NOT EXISTS  Passagem (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  Nome VARCHAR(50),
  Somente ida VARCHAR(3) NOT NULL,
  Ida e volta VARCHAR(3)NOT NULL,
  Origem VARCHAR(50)NOT NULL,
  Destino VARCHAR(50)NOT NULL,
  Inicio VARCHAR(50)NOT NULL,
  Fim VARCHAR(50)NOT NULL,
  Numero VARCHAR(3)NOT NULL,
  Idade VARCHAR(3)NOT NULL,
  Cartao VARCHAR(50)NOT NULL,
  Nº do Cartao VARCHAR(50)NOT NULL,
  Vencimento do Cartao VARCHAR(10)NOT NULL,
  Codigo de Segurança VARCHAR(10)NOT NULL,
  Parcelado VARCHAR(3)
)
`;
const PASSAGEM2_SCHEMA = `
CREATE TABLE IF NOT EXISTS  Passagem2 (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  Nome VARCHAR(50),
  Somente ida VARCHAR(50),
  Ida e volta VARCHAR(50),
  Origem VARCHAR(50),
  Destino VARCHAR(50),
  Inicio VARCHAR(50),
  Fim VARCHAR(50),
  Numero VARCHAR(50),
  Idade VARCHAR(50),
  Cartao VARCHAR(50),
  Nº do Cartao VARCHAR(50),
  Vencimento do Cartao VARCHAR(10),
  Codigo de Segurança VARCHAR(10),
  Parcelado VARCHAR(3)
)
`;const PASSAGEM3_SCHEMA = `
CREATE TABLE IF NOT EXISTS  Passagem3 (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  Nome VARCHAR(50),
  Ida VARCHAR(50),
  Volta VARCHAR(50),
  Origem VARCHAR(50),
  Destino VARCHAR(50),
  Inicio VARCHAR(50),
  Fim VARCHAR(50),
  Numero VARCHAR(50),
  Idade VARCHAR(50),
  Cartao VARCHAR(50),
  Nº do Cartao VARCHAR(50),
  Vencimento do Cartao VARCHAR(10),
  Codigo de Segurança VARCHAR(10),
  Parcelado VARCHAR(3)
)
`;
  

db.serialize(() => {
  db.run('PRAGMA foreign_keys=ON');
  db.run(PASSAGEM_SCHEMA);
  db.run(PASSAGEM2_SCHEMA);
  db.run(PASSAGEM3_SCHEMA);
 
  });

process.on('SIGINT', () =>
  db.close(() => {
    process.exit(0);
  })
);

module.exports = db;
