import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categorias: [] };
    this._novasCategorias = this._novasCategorias.bind(this);
  }
  // Ciclo de Vida do React para montagem do componente
  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  // Ciclo de Vida do React para desmontagem do componente
  componentWillUnmount() {
    this.props.categorias.desincrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }
  _hendleEventoInput(e) {
    if (e.key == "Enter") {
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
          <input
            type="text"
            className="lista-categorias_input"
            placeholder="Adicione uma categoria"
            onKeyUp={this._hendleEventoInput.bind(this)}
          />
        </ul>
      </section>
    );
  }
}

export default ListaDeCategorias;
