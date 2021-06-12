import React, { PureComponent } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import { ServiceSlider } from "./components/service-slider";
import Image1 from '../../assets/carrousel-images/1.jpg';
import Image2 from '../../assets/carrousel-images/2.jpg';
import Image3 from '../../assets/carrousel-images/3.jpg';
import Silla1 from '../../assets/chairs-images/1.jpg';
import Silla2 from '../../assets/chairs-images/2.jpg';
import Silla3 from '../../assets/chairs-images/3.jpg';
import BannerImg from '../../assets/banner.jpg';
import { ChairsCards } from "./components/chairs-cards";
import { Banner } from "./components/banner/banner";

export class Home extends PureComponent {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Banner image={BannerImg}>
                            <h4 style={{ color: 'white' }}>
                                <label style={{ color: "#FEDE00" }}>
                                    MÁS DE
                                </label>
                                <br />
                                800 MIL
                                <br />
                                FAMILIAS
                                <br />
                                HABILIDAS
                            </h4>
                            <Button>Ver productos</Button>
                        </Banner>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ServiceSlider items={carrouselData}></ServiceSlider>
                    </Col>
                </Row>

                <Col className="d-flex justify-content-center">
                    <h3 style={{ color: '#0275d8' }}>NUEVA COLECCIÓN</h3>
                </Col>
                <ChairsCards items={chairsData}></ChairsCards>
                <Col className="d-flex justify-content-center">
                    <h3 style={{ color: '#0275d8' }}>SILLAS DE RUEDAS</h3>
                </Col>
                <ChairsCards items={chairsData}></ChairsCards>
                <Col className="d-flex justify-content-center">
                    <h3 style={{ color: '#0275d8' }}>ATUDAS PARA LA MARCHA</h3>
                </Col>
                <ChairsCards items={chairsData}></ChairsCards>
                <Col className="d-flex justify-content-center">
                    <h3 style={{ color: '#0275d8' }}>TERAPIAS RESPIRATORIAS</h3>
                </Col>
                <ChairsCards items={chairsData}></ChairsCards>
            </div>
        )
    }
}


const chairsData = [
    {
        image: Silla1,
        info: "Genial silla 1"
    },
    {
        image: Silla2,
        info: "Maravillosa silla 2"
    },
    {
        image: Silla3,
        info: "Valiosisima silla 3"
    },
    {
        image: Silla2,
        info: "Maravillosa silla 2 otra vez"
    }
]

const carrouselData = [
    {
        image: Image1,
        info: "Prevención"
    },
    {
        image: Image2,
        info: "Cualquier"
    },
    {
        image: Image1,
        info: "Tapabocas"
    },
    {
        image: Image2,
        info: "Mas Tapabocas"
    },
    {
        image: Image2,
        info: "Cosa"
    },
    {
        image: Image3,
        info: "Mas Tapabocas"
    },
    {
        image: Image3,
        info: "Mas Tapabocas"
    },
    {
        image: Image1,
        info: "Prevención"
    }
]