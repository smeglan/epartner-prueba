import React, { PureComponent } from "react";
import { FormControl, Button, Navbar, InputGroup, Nav, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CompanyLogo from '../../../assets/logo-impormedical.jpg'
import "./header.css";

export class Header extends PureComponent {
    render() {

        return (
            <Navbar style={{ justifyContent: 'space-between', alignContent: 'space-between' }} bg="light" expand="lg">
                <Navbar.Brand href="#home" >
                    <img src={CompanyLogo} style={{ height: 80 }} alt="Logo Impormedical" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Col className="m-auto" md={6}>
                        <InputGroup className="mb-1 m-auto" style={styles.searchContainer}>
                            <FormControl
                                style={{ margin: 2, borderWidth: 0 }}
                                placeholder="¿QUÉ ESTAS BUSCANDO? ESCRÍBELO AQUÍ..."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="dark" style={{ margin: 2 }}><FontAwesomeIcon icon={faSearch} /></Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                    <Nav className="m-auto">
                        <Nav.Link href="#home" style={{ color: "#0275d8", fontWeight: 'bold' }}>MIS PEDIDOS</Nav.Link>
                        <Nav.Link style={styles.navLink} href="#link">
                            <small style={{ color: 'black' }}>HOLA ALIAD@</small>
                            <br />
                            <a style={styles.loginButton}>INGRESA</a>
                        </Nav.Link>
                        <Nav.Link style={styles.navLink}>
                            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <div>
                                    <label style={{ position: 'absolute', top: 0, margin: 28, color: 'white' }}>0</label>
                                    <FontAwesomeIcon icon={faShoppingCart} size="3x" color="#0275d8" />
                                </div>
                                <a style={{ margin: 10 }}>Carrito</a>
                            </Row>

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const styles = ({
    searchContainer: {
        borderColor: '#292b2c',
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: 'white'
    },
    loginButton: {
        color: "#0275d8",
        textDecoration: 'underline'
    },
    navLink: {
        marginLeft: 5,
        marginRight: 5
    }

})
