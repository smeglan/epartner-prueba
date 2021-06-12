import React from "react";
import { Card, Row, Col, Button } from 'react-bootstrap';

export const ChairsCards = ({ ...props }) => {
    const { items = [] } = props;
    return (
        <Row>
            {items.map((item: any) => {
                return (
                    <Col md={3}>
                        <Card>
                            <img src={item.image} style={{ height: 260 }} alt={item.info}></img>
                            <Card.Text>{item.info}</Card.Text>
                            <Button>Añadir al carrito</Button>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}
