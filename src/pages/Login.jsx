import React from 'react';
import NavBar from '../componente/NavBar';
import Content from '../componente/Content';
import Footer from '../componente/Footer';
import LoginForm from '../containers/LoginForm';


const links = [
    {href: 'login', title:'Login'},
    {href: 'register', title: 'Registrarse'},
    {href: 'contact', title: 'Contacto'},
    {href: 'prueba', title:'Prueba'}

];



function Login() {
    return (
        <>
    <NavBar links={links} />
    <Content title="Ingresar">  {/* se crea atributo del componente title=algo  title nombre x*/}
        <LoginForm/>          {/*USA EL LoginForm*/}
        
    </Content>            
    <Footer/>    
    </>
    );

}

export default Login;