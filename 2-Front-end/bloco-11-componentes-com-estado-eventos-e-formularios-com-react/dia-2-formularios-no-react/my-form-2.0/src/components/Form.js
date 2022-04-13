import React from "react";
import './Form.css';

class Form extends React.Component {
    render() {
        return (
            <form className="form">
                <fieldset>
                    <legend>Informações pessoais</legend>
                    <input type="text" name="name" placeholder="Nome" required="required" maxLength="40" className="uppercase"/>
                    <input type="email" name="email" placeholder="E-mail" required="required" maxLength="50"/>
                    <input type="text" name="cpf" placeholder="CPF" required="required" maxLength="11"/>
                    <input type="text" name="address" placeholder="Endereço" required="required" maxLength="200"/>
                    <input type="text" name="city" placeholder="Cidade" required="required" maxLength="28"/>
                    
                </fieldset>
            </form>
        )
    }
}
// Remover caracteres especiais com Javascript
// var texto =  "joão 1444?";
// var er = /[^a-z0-9]/gi;
// texto = texto.replace(er, "");
// console.log(texto);

export default Form;