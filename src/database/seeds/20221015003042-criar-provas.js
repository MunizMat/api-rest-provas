/** @type {import('sequelize-cli').Migration} */
function Prova(nome, stringGabarito) {
  this.nome = nome;
  [this.tipo, this.ano, this.dia] = nome.split('-');
  this.gabarito = stringGabarito;
  this.num_questoes = stringGabarito.length;
  this.tempo = this.dia === '1' ? 5.5 : 5;
  this.opcoes = 'ABCDE';
  this.created_at = new Date();
  this.updated_at = new Date();
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('availableprovas', [
      new Prova('ENEM-2021-1', 'CAABBBDCDEADCEDBEDDDABBBBDEBCEADABDBACACDCDDCBADCBADBCEDDEBBADBCABEECCAEABEBAAECBBABAAEEBB'),
      new Prova('ENEM-2021-2', 'EDECABEDABCBEBACCDCBBEEBBCBDAAECDCBDCDBBBADCDEE*EBABDDCECCBCCECDCAEBADEABBDBDEDCEDCCADDCAB'),
      new Prova('ENEM-2020-1', 'AAEDCCEAACBAEBBEDACDBAADADDEBBEBAAADEACAAADBBDABCBDDDAEDBECECBBEDEBDEECBCCCBACDCCADEBDECDD'),
      new Prova('ENEM-2020-2', 'DDBACBDDDECDAEDCCCEDBDDCBDDCAAECEDDACCBAEDCD*DABCCAEDBBCCCABCACCBD*CCCBEEEDBBACCDACBAEBAEC'),
      new Prova('ENEM-2019-1', 'BDABEBCBAADDBECDAAECDAECBECBCCDEEAAADDBBCDCEBBACCCBABBADCBCEEEBCACACEEDBCCADBEADBADBBBACDB'),
      new Prova('ENEM-2019-2', 'AAECACDEADCBCDDDBCBDADAEABCEBABEEBCBEECEBDADCEEEADBEBACABCDBABECECACDCBDCCEDCDABEDECDDDBAA'),
    ], {});
  },

  async down() {},
};
