import React, { Component } from 'react';
import './css/pure-min.css';
import Menu from './Menu';
import Header from './Header';
import MenuMobile from './MenuMobile';
import { AutorBox } from './Autor';

class App extends Component {

    render(){
        return (
            
            <div id="layout">

                <MenuMobile />
                <Menu />

                <div id="main">
                    <Header />

                    <div className="content">
                        
                       <AutorBox></AutorBox>

                    </div>
                </div>
            </div>

        );
    }
}

export default App;
