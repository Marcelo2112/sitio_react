import React from 'react';


export default function DeliveriesTable(props){
    return (
        <table>
            <thead>
                <tr>
                    <th>N&uacute;mero</th>
                    <th>Estado    </th>
                    <th>Fecha de Creaci&oacute;n    </th>
                </tr>
            </thead>
            <tbody>
                {props.deliveries.map((delivery, key) =>(
                    <tr key={key}>
                        <td>{delivery.id}</td>
                        <td>{delivery.estado}</td>
                        <td>{delivery.creacion}</td>
                    </tr> 
                ))}
            </tbody>
        </table>
    );
}