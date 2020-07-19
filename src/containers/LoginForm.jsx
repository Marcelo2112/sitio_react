import React from 'react';
import InputLine from '../componente/InputLine';
import {login} from '../api'
import {validateEmail, validatePassword} from '../utils/validations';

export default class LoginForm extends React.Component{
    state={
        loginData:{
            email:'',
            password:''
        },
        errors: {
            email: false,
            password: false
        }
    };

    
     /*if  (value===''){
            return true;
        } else {
            return false;
        }*/


    doLogin = (event) => {
       /* const {email, password} = this.state.loginData;
        const emailError = validateEmail(email);
        const passwordError= !validatePassword(password,email);

        console.log('email error: ' + emailError);
        console.log('password error: ' + passwordError);

        this.setState({
            errors:{
                email:emailError,
                password:passwordError
            }

        }

        )*/

        event.preventDefault();
        login(this.state.loginData).then(function(response){
            return response.text();
        }).then(function(token){
            console.log(token);
        });
    }

    onChange =(name, event) => {
        const value = event.target.value;
        const loginData= Object.assign({},this.state.loginData);
        loginData[name]= value;
        this.setState({
                loginData
        });
        
    
    }
  /*concatenacion*/
    render() {
        const {email, password} = this.state.loginData;
        const {errors} = this.state;


        return(
             
        <form>
           <InputLine 
           name="email" 
           label ="Correo"
           type="text"
           onChange={this.onChange} 
           error={errors.email} 
           value={email}  
           />
           <InputLine 
           name="password" 
           label="Contrase&ntilde;a" 
           type="password" 
           onChange={this.onChange} 
           error={errors.password}    
           value={password} 
           />
            
            <div className="centrado">
         <button onClick={this.doLogin}>Ingresar</button>
         <button className="boton2">Recuperar Clave</button>
            </div>
        </form>
        );

    }

}




/*
export default function LoginForm(){
    return(
             
    <form>
       <InputLine label ="Correo" type="text" />
       <InputLine label="Contrase&ntilde;a" type="password"/>
        
        <div className="centrado">
     <button >Ingresar</button>
     <button className="boton2">Recuperar Clave</button>
        </div>
    </form>
    );
}*/