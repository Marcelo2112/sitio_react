import React from 'react';
import NavBar from '../componente/NavBar';
import Content from '../componente/Content';
import Footer from '../componente/Footer';



const links = [
    {href: 'login', title:'Login'},
    {href: 'register', title: 'Registrarse'},
    {href: 'contact', title: 'Contacto'}

];



function Login() {
    return (
        <>
    <NavBar links={links} />
    <Content title="Pagina no encontrada 404"/>  
    <Footer/>    
    </>
    );

}

export default Login;