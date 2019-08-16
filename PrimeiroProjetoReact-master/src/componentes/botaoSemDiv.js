import React, { Component } from 'react';

// import { Container } from './styles';

export default class BotaoSemDiv extends Component {
  render() {
    return (
        <button type={this.props.type}  className={this.props.className} >{this.props.nome}</button>
    );
  }
}
