import React from 'react';
import DeliveriesTable from '../componente/DeliveriesTable';
import {getDeliveries} from '../api'


export default class DeliveriesInfo extends React.Component{
    state = {
        deliveries: []
    }
    componentDidMount() {
        getDeliveries()
        .then(response =>{
            if (!response.ok){
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(deliveries =>{
            this.setState({deliveries });
        })
        .catch(err =>{
            alert('No fue posible cargar sus pedidos');
            this.props.history.push('/deliveries');
        })
    }
  
    render() {
        return(
        <DeliveriesTable deliveries={this.state.deliveries}/>
        );

    }

} 




