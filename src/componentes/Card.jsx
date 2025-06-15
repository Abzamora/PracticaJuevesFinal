import React, { useState } from 'react';
import {
Card, CardBody, CardTitle, CardText, Row, Col
} from 'reactstrap';


const CardComponent = () => {
const [modal, setModal] = useState([false, false, false]);

const toggle = idx => {
    setModal(modal.map((m, i) => (i === idx ? !m : m)));
};

const [simpleModals, setSimpleModals] = useState([false, false, false]);

const toggleSimpleModal = idx => {
    setSimpleModals(simpleModals.map((m, i) => (i === idx ? !m : m)));
};

const cardTexts = [
    "Adam Samdler.",
    "Will Smith.",
    "Eugenio Derbez."
];

return (
    <>
    <div className="mt-4 p-4 bg-secondary text-white">
        <Row>
            {[
                "https://sm.ign.com/ign_latam/cover/a/adam-sandl/adam-sandler_hyvv.jpg",
                "https://es.web.img2.acsta.net/pictures/17/02/08/16/50/452749.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/7/7c/Eugenio_Derbez.png"
            ].map((imgUrl, idx) => (
                <Col md="4" key={idx}>
                    <Card body className='bg-dark'>
                        <CardBody>
                            <img
                                src={imgUrl}
                                alt={`Imagen ${idx + 1}`}
                                className="mb-3"
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                            <CardText>{cardTexts[idx]}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
    </>
);
};

export default CardComponent;