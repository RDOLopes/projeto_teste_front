import React, { Component } from "react";
import validator from 'validator';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class TableDatePicker extends Component {
  
  _handleMudancaDataPublicacao(value){
    if (!validator.isDate(value)) {
       alert("Data inválida.");
    }
    else{
      
      this.dataPublicacao = value.toString();
    } 
  }

  render() {
    return (
      <DatePicker selected={new Date()} 
                  onChange={(date) => this._handleMudancaDataPublicacao(date)}
                  dateFormat="dd/MM/yyyy" />
    );

  }
}

export default TableDatePicker;