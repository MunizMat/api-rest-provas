function Prova(nome, stringGabarito) {
  this.nome = nome;
  [this.tipo, this.ano] = nome.split('-');
  this.gabarito = stringGabarito;
  this.num_questoes = stringGabarito.length;
  this.tempo = 5;
  this.opcoes = 'ABCDE';
}
