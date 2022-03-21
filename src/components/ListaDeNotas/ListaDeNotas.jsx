import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css";

class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
    this._novasNotas = this._novasNotas.bind(this);
  }
  // Ciclo de Vida do React para montagem do componente
  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas);
  }

  // Ciclo de Vida do React para desmontagem do componente
  componentWillUnmount() {
    this.props.notas.desiscrever(this._novasNotas);
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li key={index} className="lista-notas_item">
              <CardNota
                indice={index}
                apagarNota={this.props.apagarNota}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
