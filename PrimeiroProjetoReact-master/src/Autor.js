import React,  { Component } from 'react';
import InputFormulario from './componentes/inputFormulario';
import Botao from './componentes/botao';
import BotaoSemDiv from './componentes/botaoSemDiv';
import $ from 'jquery';
import TrataErrors from './TrataErrors';
import PubSub from 'pubsub-js';

export class FormularioAutor extends Component{

    constructor(){
        super();
        this.state = {nome:'', email:'', cidade:'' };
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setCidade = this.setCidade.bind(this);
        this.enviarForm = this.enviarForm.bind(this);
    }

    enviarForm(evento){
        //cansela o evento do botão submit
        evento.preventDefault();
       
        $.ajax({
            url: 'http://localhost:8080/autores',
            contentType: 'application/json',
            dataType: 'json',            
            type: 'post',
            data: JSON.stringify(
                {
                    nome:this.state.nome,
                    email:this.state.email, 
                    cidade:this.state.cidade
                }
            ),
            success: function(response){
                console.log('dico esta chegando');
                //auterando o stado da lista 
                this.props.atualizarLista(response);
                this.setState({nome:'',email:'',cidade:''});
            }.bind(this),
            error: function (resposta) {
                if(resposta.status === 400){
                    new TrataErrors().publicaErros(resposta.responseJSON);
                };
                
                
            },
            beforeSend: function(){
                PubSub.publish("limpar-erros", {});
            }
            


        });
    }

    //metodo que pega o valor da caixa para 'setar' no state
    setNome(evento){
        this.setState({nome:evento.target.value});
    }

    setEmail(evento){
        this.setState({email:evento.target.value});
    }

    setCidade(evento){
        this.setState({cidade:evento.target.value});
    }

    render(){
        return(
            
            <div className="pure-form pure-form-aligned">
                <h1> Cadastro de Autore </h1>   
                <form className="pure-form pure-form-aligned center" onSubmit={this.enviarForm} method="post">
                    
                    <InputFormulario 
                        id="nome" 
                        type="text" 
                        name="nome" 
                        value={this.state.nome} 
                        onChange={this.setNome}
                        label="Nome:">
                        
                    </InputFormulario>
            
                    <InputFormulario 
                        id="email" 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.setEmail}
                        label="Email:">
                    </InputFormulario>
            
                    <InputFormulario 
                        id="cidade" 
                        type="text" 
                        name="cidade" 
                        value={this.state.cidade} 
                        onChange={this.setCidade}
                        label="Cidade:">
                    </InputFormulario>
                    
            
                    <Botao
                        type="submit"
                        nome="Gravar"
                        className="button-success pure-button pure-u-1-8"
                        classNameDiv="pure-control-group">
                    </Botao> 
            
                </form>
            
            
            </div>

        );
    }
}

export class TabelaAutor extends Component{
    


    render(){
        return(

            <div>
            <table className="pure-table center">
                <thead>
                    <tr>
                        <td>
                            Id                                       
                        </td>
                        <td>
                            Nome
                        </td>
                        <td>
                            Email
                        </td>
                        <td>
                            Opções
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {
                    //TRATANDO UM 'JSON' COM FUNCTION ARROW E MAP
                        this.props.lista.map(autor =>     
                            <tr>
                                <td>{autor.id} </td>
                                <td>{autor.nome} </td>
                                <td>{autor.email}</td>
                                <td>
                                    
                                    <BotaoSemDiv
                                        type="submit" 
                                        className="button-error margin-button pure-button pure-u-4-5"
                                        nome="Excluir">
                                    </BotaoSemDiv>
                                    <BotaoSemDiv
                                        type="submit" 
                                        className="button-warning margin-button pure-button pure-u-4-5"
                                        nome="Editar">
                                        
                                    </BotaoSemDiv>
                                </td>
                            </tr>
                    
                        )
                    }
                </tbody>

            </table>
        </div>


        );
    };
}


export class AutorBox extends Component {
    constructor(){
        super();
        //state = como esta o elemento no momento e guarda todas as varivaeis da tela
        //e mudando a tele, ele renderiza de novo
        this.state = {lista:[]};
        this.atualizarListagem = this.atualizarListagem.bind(this);   
    }

    
    //DEPOIS DE MONSTAR O SITE
    componentDidMount(){
        console.log('monto');
        
        $.ajax({
            url: 'http://localhost:8080/autores',
            typeData: 'json',
            type: 'GET',
            success: function(response){
                console.log('dico esta chegando');
                //auterando o stado da lista 
                this.setState({lista:response});
            }.bind(this),//bind - aponta para fora da função que ésta - this - para referenciar o diz de fora do ajax
            error: function (resposta) {
                console.log("Ocorreu um erro na conexão");
            }
        });
    }

    //ANTES DE MONTAR O SITE    
    componentWillMount(){
        console.log('nao ta montado');
    }

    atualizarListagem(novaLista){
        this.setState({lista:novaLista});
    }

  render() {
    return (
        <div>
        
            <FormularioAutor atualizarLista={this.atualizarListagem}/>
            <br/>
            <TabelaAutor lista={this.state.lista}/>
        
        </div>
    );
  }
}
