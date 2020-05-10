import React from 'react';
import Funcionalidad from './Generic/Funcionalidad';
import Home from './Home/Home';
import AdministradorTest from './Administrador/AdministradorTest';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

let HomeComponent = props => (<Funcionalidad component={Home} funcionalidad="Home"/>);
let AdministradorComponent = props => (<Funcionalidad component={AdministradorTest} funcionalidad="AdministradorTest"/>);

class AppSE extends React.Component {
  
    render(){
        return (
            <Router> 
                <Switch>
                <Route exact path='/' component={HomeComponent}/>
                <Route exact path='/administrador' component={AdministradorComponent}/>
                </Switch>
            </Router>
        );
    }
}

export default AppSE;
