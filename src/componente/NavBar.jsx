import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar (props){
    return(
        <header>
            <nav>
              <ul>     
             {props.links.map((link, key) => <li key={key}><Link to={link.href}>{link.title}</Link></li>)}
        </ul>
      </nav>
    </header>
    );
}
