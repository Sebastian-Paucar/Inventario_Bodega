import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Panel de Gestión de Inventario</h1>
      <div className="d-flex justify-content-center mt-4">
        <Button variant="success" className="me-2" >
          <FontAwesomeIcon icon={faPlusCircle} /> Añadir Producto
        </Button>
        <Button variant="info">
          <FontAwesomeIcon icon={faListAlt} /> Ver Producto
        </Button>
      </div>
    </div>
  );
};

export default Home;