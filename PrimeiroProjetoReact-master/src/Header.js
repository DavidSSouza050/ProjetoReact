import React, { Component } from 'react';

import './css/pure-min.css';

//FAZENDO O COMPONENT COM CLASS

class Header extends Component{
    //render é uma metodo que permite renderizar um 'objeto' no navegador    
    render(){
    // esta é o retorno do render para poder imprimir na tele  
      return(
        <div className="header">
            <h1>Autores</h1>
            <h2>Cadastre os autores do seus livros aqui</h2>
        </div>     
      );
    }
}
// lebre-se de sempre exportar o component para poder importar em u outro lugar
export default Header;


// FAZENDO O COMPONENT COM FUNCTION
// function Header() {
//   return (

   // //<div className="header">
    //     <h1>Atores</h1>
    //     <h2>Cadastre os autores do seus livros aqui</h2>
    // </div>
    
//   );
// }

// export default Header;


