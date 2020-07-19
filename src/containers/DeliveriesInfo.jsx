import React from 'react';
import DeliveriesTable from '../componente/DeliveriesTable';
import {getDeliveries} from '../api'


class DeliveriesInfo extends React.Component{
    componentDidMount() {
        getDeliveries()
    }
  
    render() {
        return(
        <DeliveriesTable/>
        );

    }

} 
export default withRouter (DeliveriesInfo);



