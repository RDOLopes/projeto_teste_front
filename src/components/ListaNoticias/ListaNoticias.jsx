import React, { Component } from "react";
import Noticia from "../Noticia";
import "./estilo.css";
class ListaNoticias extends Component {
 
  render() {
    return (
      <ul className="lista-publicacoes">
        {this.props.noticias.map((noticia, index) => {
          return (
            <li className="lista-noticias_item" key={index}>
              <Noticia titulo={noticia.titulo} texto={noticia.texto} dataPublicacao={noticia.dataPublicacao}/>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaNoticias;
