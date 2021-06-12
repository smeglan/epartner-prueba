import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export const Footer = () => {
    return (
        <Row style={{ backgroundColor: '#292b2c', marginTop: 10, paddingTop: 40, paddingLeft: 20, paddingRight: 20, paddingBottom: 60 }}>
            <Col>
                <h5 style={{ color: "#FEDE00" }}>SOBRE NOSOTROS</h5>
                <div>
                    <a href="/" style={{ color: "white" }}>¿Quienes somos?</a>
                </div>
                <div>
                    <a href="/" style={{ color: "white" }}>Nuestra historia</a>
                </div>
                <div>
                    <a href="/" style={{ color: "white" }}>Nuestra información</a>
                </div>
            </Col>
            <Col>
                <h5 style={{ color: "#FEDE00" }}>CATEGORIAS DESTACADAS</h5>
                <div>
                    <a href="/" style={{ color: "white" }}>Profesionales de la salud</a>
                </div>
                <div>
                    <a href="/" style={{ color: "white" }}>Protección e higiene</a>
                </div>
                <div>
                    <a href="/" style={{ color: "white" }}>Control y prevención</a>
                </div>
                <div>
                    <a href="/" style={{ color: "white" }}>Movilidad</a>
                </div>
                <div>
                    <a href="/" style={{ color: "white" }}>Independencia y cuidado en el hogar</a>
                </div>
                <div>
                    <a href="/" style={{ color: "white" }}>Terapia respiratoria</a>
                </div>
                <div>
                    <a href="/" style={{ color: "white" }}>Confort</a>
                </div>

            </Col>
            <Col>
                <h5 style={{ color: "#FEDE00" }}>SERVICIO AL CLIENTE</h5>
                <div>
                    <a href="/" style={{ color: "white" }}>Politica de entregas</a>
                </div>
                <div>
                    <a href="/" style={{ color: "white" }}>Politica de devoluciones</a>
                </div>
                <div>
                    <a href="/" style={{ color: "white" }}>Politica de garantias</a>
                </div>
                <div>
                    <a href="/" style={{ color: "white" }}>Whatsapp 123 123 3434</a>
                </div>
                <div>
                    <a href="/" style={{ color: "white" }}>PBX 01 8000 123 345</a>
                </div>
                <div>
                    <a href="/" style={{ color: "white" }}>e-Mail: info@impomedical.com</a>
                </div>
            </Col>
            <Col>
                <h5 style={{ color: "#FEDE00" }}>SUBSCRIBASE A NUESTRO NEWSLETTER</h5>
                <input className="form-control"></input>
                <Button>Subcribirse</Button>
            </Col>
        </Row>
    )
}