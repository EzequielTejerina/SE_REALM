import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

class MenuSE extends Component{

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#/">SE REALM</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Administración"> 
                            <NavDropdown.Item href="#/administrador">Carrera</NavDropdown.Item>
                            <NavDropdown.Item >Universidades</NavDropdown.Item>
                            <NavDropdown.Item >Sedes</NavDropdown.Item>
                            <NavDropdown.Item >Departamentos</NavDropdown.Item>
                            <NavDropdown.Item >Planes de estudio</NavDropdown.Item>
                            <NavDropdown.Item >Materias</NavDropdown.Item>
                            <NavDropdown.Item >Alumnos</NavDropdown.Item>
                            <NavDropdown.Item >Profesores</NavDropdown.Item>
                            <NavDropdown.Item >Aulas</NavDropdown.Item>
                            <NavDropdown.Item >Cronograma</NavDropdown.Item>
                            <NavDropdown.Item >Turnos</NavDropdown.Item>
                            <NavDropdown.Item >Comisiones</NavDropdown.Item>
                            <NavDropdown.Item >Roles</NavDropdown.Item>
                        </NavDropdown>
                        {/*<NavDropdown title="Reportes">
                            <NavDropdown.Item >Action</NavDropdown.Item>
                            <NavDropdown.Item >Another action</NavDropdown.Item>
                            <NavDropdown.Item >Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item >Separated link</NavDropdown.Item>
                        </NavDropdown>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MenuSE;