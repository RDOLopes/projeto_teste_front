import React, { Component } from "react";
import "./estilo.css";
class   Noticia extends Component {
  render() {
    return (
      <section className="noticia">
        <header className="noticia_cabecalho">
          <h3 className="noticia_titulo">{this.props.titulo}</h3>
        </header>
        <p className="noticia_texto">{this.props.conteudo}</p>
        <p className="noticia_data">{this.props.data_publicao}</p>
      </section>
    );
  }
}

export default Noticia;
