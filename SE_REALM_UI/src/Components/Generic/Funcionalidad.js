import React, {Component} from 'react';
import MenuSE from '../Menu/MenuSE';
import FooterSE from '../Footer/FooterSE';
import PropTypes from 'prop-types';

class Funcionalidad extends Component{
    
    constructor(props){
        super(props);
    }
    
    render(){     
        return(
            <React.Fragment>
                <MenuSE></MenuSE>
                <this.props.component {...this.props}></this.props.component>
                <FooterSE></FooterSE>
            </React.Fragment>
        );
    }
}

Funcionalidad.propsType = {
    component: PropTypes.element,
    funcionalidad: PropTypes.string
}

export default Funcionalidad;