import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo ="";
    this.texto ="";
  }

  _handleMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _handleMudancaDataPublicacao(evento){
    evento.stopPropagation();
    this.dataPublicacao = evento.target.value;
  }

  _criarNoticia(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props._criarNoticia(this.titulo, this.texto, this.dataPublicacao);
    
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNoticia.bind(this)}
      >
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua Noticia..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <input
          type="text"
          placeholder="Data da publicação"
          className="form-cadastro_input"
          onChange={this._handleMudancaDataPublicacao.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar noticia
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
