import React from 'react';


export default function Content(props){
    const {title, children} = props;

    return(
        <section>
            <div className="tarjeta">
            <header>
             <h3>{title}</h3> {/*codigo javascrip*/}
            </header>
            {children}
            </div>
           
        </section>
    );

        /*
          <div class="tarjeta">
            <header>
             <h3>{props.title}</h3> 
             </header>
             {props.children}
            
        */

}
