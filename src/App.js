import React, { Component } from "react";
import ListaDeNoticias from "./components/ListaNoticias";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor(){
    super();

    this.state = {
      noticias:[]
    }
  }

  criarNoticia(titulo, texto, dataPublicacao){
    const novaNoticia = {titulo, texto, dataPublicacao};
    const novoArrayNoticias = [...this.state.noticias,novaNoticia]
    const novoEstado = {
      noticias:novoArrayNoticias
    }
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNoticia={this.criarNoticia.bind(this)}/>
        <ListaDeNoticias noticias={this.state.noticias}/>
      </section>
    );
  }
}

export default App;
