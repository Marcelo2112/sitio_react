import React from 'react';
import NavBar from '../componente/NavBar';
import Footer from '../componente/Footer';
import Content from '../componente/Content';
import ContactForm from '../containers/ContactForm'

const links = [
    {href: 'login', title: 'Login'},
    {href: 'register', title: 'Registrarse'}
]


export default function Contact(){
    return(
        <>
        <NavBar links={links}/>
        <Content title="Cont&aacute;ctenos">
            <ContactForm/>
        </Content>
        <footer/>

        </>
    );
}