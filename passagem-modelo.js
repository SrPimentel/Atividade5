const passagemDao = require('./passagem-dao');
const validacoes = require('../validacoes-comuns');

class Passagem {
  constructor(passagem) {
    this.Nome = passagem.Nome;
    this.Somenteida = passagem.Somenteida;
    this.Idaevolta = passagem.Idaevolta;
    this.Origem = passagem.Origem;
    this.Destino = passagem.Destino;
    this.Inicio = passagem.Inicio;
    this.Fim = passagem.Fim;
    this.Numero = passagem.Numero;
    this.Idadeda = passagem.Idade;
    this.Cartao = passagem.Cartao;
    this.NdoCartao = passagem.NdoCartao;
    this.VencimentodoCartao = passagem.VencimentodoCartao;
    this.CodigodeSegurança = passagem.CodigodeSegurança;
    this.Parcelado = passagem.Parcelado;
    this.valida();
  }
  lista(){
    
  }

  adiciona() {
    return passagemDao.adiciona(this);
  }

  valida() {
    validacoes.campoStringNaoNulo(this.Nome, 'Nome');
    validacoes.campoTamanhoMinimo(this.Nome, 'Nome', 3);

    validacoes.campoStringNaoNulo(this.Somenteida, 'Somente ida');
    validacoes.campoTamanhoMinimo(this.Somenteida, 'Somente ida', 1);

    validacoes.campoStringNaoNulo(this.Idaevolta, 'Ida e volta');
    validacoes.campoTamanhoMaximo(this.Idaevolta, 'Ida e volta', 140);

    validacoes.campoStringNaoNulo(this.Origem, 'Origem');
    validacoes.campoTamanhoMaximo(this.Origem, 'Origem', 140);

    validacoes.campoStringNaoNulo(this.Destino, 'Destino');
    validacoes.campoTamanhoMaximo(this.Destino, 'Destino', 140);

    validacoes.campoStringNaoNulo(this.Inicio, 'Inicio');
    validacoes.campoTamanhoMaximo(this.Inicio, 'Inicio', 140);

    validacoes.campoStringNaoNulo(this.Fim, 'Fim');
    validacoes.campoTamanhoMaximo(this.Fim, 'Fim', 140);

    validacoes.campoStringNaoNulo(this.Numero, 'Numero');
    validacoes.campoTamanhoMaximo(this.Numero, 'Numero', 140);

    validacoes.campoStringNaoNulo(this.Idade, 'Idade');
    validacoes.campoTamanhoMaximo(this.Idade, 'Idade', 140);

    validacoes.campoStringNaoNulo(this.Cartao, 'Cartao');
    validacoes.campoTamanhoMaximo(this.Cartao, 'Cartao', 140);

    validacoes.campoStringNaoNulo(this.NdoCartao, 'Nº do Cartao');
    validacoes.campoTamanhoMaximo(this.NdoCartao, 'Nº do Cartao', 140);

    validacoes.campoStringNaoNulo(this.VencimentodoCartao, 'Vencimento do Cartao');
    validacoes.campoTamanhoMaximo(this.VencimentodoCartao, 'Vencimento do Cartao', 140);

    validacoes.campoStringNaoNulo(this.CodigodeSegurança, 'Codigo de segurança');
    validacoes.campoTamanhoMaximo(this.CodigodeSegurança, 'Codigo de segurança', 140);

    validacoes.campoStringNaoNulo(this.Parcelado, 'Parcelado');
    validacoes.campoTamanhoMaximo(this.Parcelado, 'Parcelado', 140);

  }

  static lista() {
    return passagemDao.lista();
  }
}

module.exports = Passagem;
