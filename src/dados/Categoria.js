export default class Categoria {
  constructor() {
    this.categorias = [];
    this._inscritos = [];
  }

  inscrever(func) {
    this._inscritos.push(func);
  }

  desiscrver(func) {
    this._inscritos = this._inscritos.filter((f) => f !== func);
  }

  notificar() {
    this._inscritos.forEach((func) => {
      func(this.categorias);
    });
  }

  adicionarCategoria(novaCategoria) {
    this.categorias.push(novaCategoria);
    this.notificar();
  }
}