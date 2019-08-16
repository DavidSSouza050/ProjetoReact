import PubSub from 'pubsub-js';

export default class TrataErrors{
  
    publicaErros(erros){
        
        for(let i=0; i < erros.errors.length; i++){
            let erro = erros.errors[i];
            PubSub.publish("mensagem-erro", erro);
            console.log(erro);
            
        }
    }
}
