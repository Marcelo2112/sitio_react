import React from 'react';
import NavBar from '../componente/NavBar';
import Content from '../componente/Content';
import Footer from '../componente/Footer';
import DeliveriesInfo from  '../containers/DeliveriesInfo'
import LoginForm from '../containers/LoginForm';


const links = [
    {href: 'contact', title: 'Contacto'},
    {href: 'logout', title:'Salir'}
   

];



function Login() {
    return (
        <>
    <NavBar links={links} />
    <Content title="Pedidos">  
        <DeliveriesInfo />
    </Content>            
    <Footer/>    
    </>
    );

}

export default Login;