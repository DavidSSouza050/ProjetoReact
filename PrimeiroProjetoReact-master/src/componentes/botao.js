import React, { Component } from 'react';

// import { Container } from './styles';

export default class Botao extends Component {
  render() {
    return( 
        
        <div className={this.props.classNameDiv}>
            <label></label>
            <button type={this.props.type}  className={this.props.className} >{this.props.nome}</button>
        </div>  
    
    );
  }
}
