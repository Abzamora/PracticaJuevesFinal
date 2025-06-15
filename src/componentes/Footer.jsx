import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => (
    <footer className="bg-dark text-white mt-5 p-4">
        <Container>
            <Row>
                <Col md={6}>
                    <h5>Pagina de: AMILCAR BRANDON ZAMORA PAREDES</h5>
                    <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
                </Col>
                <Col md={6} className="text-md-end">
                    <a href="https://www.umsa.bo/" className="text-white me-3">UMSA</a>
                    <a href="http://informatica.umsa.bo/" className="text-white">INFORMATICA</a>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;