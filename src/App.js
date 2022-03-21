import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categoria from "./dados/Categoria";
import ArrayDeNotas from "./dados/Notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categoria();
    this.notas = new ArrayDeNotas();
  }
  /* criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado); // Atribuir um novo estado
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  }

  /*adicionarCategoria(nomeCategoria) {
    const novaArrayCategoria = [...this.state.categorias, nomeCategoria];
    const novoEstado = {
      // ...this.state,
      categorias: novaArrayCategoria,
    };
    this.setState(novoEstado);
  }*/

  render() {
    return (
      <section className="conteudo">
        {/* Chamar o criarNota() no formulário através da propriedade do componente */}
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.deletarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
