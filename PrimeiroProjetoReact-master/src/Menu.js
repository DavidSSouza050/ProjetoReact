import React, { Component } from 'react';
import './css/side-menu.css';
import './css/pure-min.css';

class Menu extends Component {
  render(){
    return (

      <div id="menu">
        
        <div className="pure-menu">
          <a className="pure-menu-heading" href="#">livrariaFON</a>
  
            <ul className="pure-menu-list">
  
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autores</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Livros</a></li>
              
  
            </ul>
        </div>
      </div>
      
  
    );
  }
  
}

export default Menu;

