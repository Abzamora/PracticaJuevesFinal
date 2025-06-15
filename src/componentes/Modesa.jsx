import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modesa(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', maxWidth: 350, margin: '0 auto' }} className='mt-4'>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', width: '100%' }}>
        <Button color="secondary" onClick={() => setModal('modal1')} style={{ minWidth: 150 }}>
          Rocky I
        </Button>
        <Button color="secondary" onClick={() => setModal('modal2')} style={{ minWidth: 150 }}>
          El rey león
        </Button>
        <Button color="secondary" onClick={() => setModal('modal3')} style={{ minWidth: 150 }}>
          Batman
        </Button>
        <Button color="secondary" onClick={() => setModal('modal4')} style={{ minWidth: 150 }}>
          Rapidos y Furiosos
        </Button>
        <Button color="secondary" onClick={() => setModal('modal5')} style={{ minWidth: 150 }}>
          Shrek
        </Button>
      </div>

      <Modal isOpen={modal === 'modal1'} toggle={() => setModal(false)} {...args}>
        <ModalHeader toggle={() => setModal(false)}>Rocky I</ModalHeader>
        <ModalBody className='bg-black text-white-50'>
          una pelicula de boxeo protagonizada por Sylvester Stallone, que cuenta la historia de un boxeador amateur que tiene la oportunidad de pelear por el título mundial.
        </ModalBody>
        <ModalFooter>
          <Button color="dark" onClick={() => setModal(false)}>
            cerrar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal === 'modal2'} toggle={() => setModal(false)} {...args}>
        <ModalHeader toggle={() => setModal(false)}>El rey león</ModalHeader>
        <ModalBody className='bg-black text-white-50'>
          una película animada de Disney que sigue la historia de Simba, un joven león que debe enfrentarse a su destino como rey de la Sabana.
        </ModalBody>
        <ModalFooter>
          <Button color="dark" onClick={() => setModal(false)}>
            cerrar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal === 'modal3'} toggle={() => setModal(false)} {...args}>
        <ModalHeader toggle={() => setModal(false)}>Batman</ModalHeader>
        <ModalBody className='bg-black text-white-50'>
          una película de superhéroes basada en el personaje de DC Comics, que sigue las aventuras del vigilante enmascarado de Gotham City.
        </ModalBody>
        <ModalFooter>
          <Button color="dark" onClick={() => setModal(false)}>
            cerrar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal === 'modal4'} toggle={() => setModal(false)} {...args}>
        <ModalHeader toggle={() => setModal(false)}>Rapidos y Furiosos</ModalHeader>
        <ModalBody className='bg-black text-white-50'>
          una franquicia de películas de acción que se centra en carreras callejeras, robos y la familia, protagonizada por Vin Diesel y Paul Walker.
        </ModalBody>
        <ModalFooter>
          <Button color="dark" onClick={() => setModal(false)}>
            cerrar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal === 'modal5'} toggle={() => setModal(false)} {...args}>
        <ModalHeader toggle={() => setModal(false)}>Shrek</ModalHeader>
        <ModalBody className='bg-black text-white-50'>
          una película animada de DreamWorks que cuenta la historia de un ogro llamado Shrek que se embarca en una aventura para rescatar a una princesa y descubre el verdadero significado de la amistad y el amor.
        </ModalBody>
        <ModalFooter>
          <Button color="dark" onClick={() => setModal(false)}>
            cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modesa;