import React from 'react';
import NavBar from '../componente/NavBar';
import Footer from '../componente/Footer';
import Content from '../componente/Content';
import RegisterForm from '../containers/RegisterForm';


const links = [
    {href: 'login', title:'Login'},
    {href: 'register', title: 'Registrarse'},
    {href: 'contact', title: 'Contacto'}

];

function Register(){

    return(
        <> {/*hijos de esta etiqueta, nav, conten footer*/}
        <NavBar links={links} />
        <Content title="Registro">
            <RegisterForm/>    {/*hijo de content*/}
        </Content>
        <Footer/>
         </>
    );
}

export default Register;