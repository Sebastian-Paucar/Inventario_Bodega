import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
<div className="flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
  <div className="container mt-5"> 
      <h1 className="text-center mb-4">Gestión de Inventario de Bodega</h1>
      <br></br>
      <div className="text-center">
        <Button variant="primary" onClick={() => navigate('/login')}>Iniciar Sesión</Button>
        <Button variant="outline-secondary" className="ms-3" onClick={() => navigate('/register')}>Registrarse</Button>
      </div>
      </div>
      </div>
  );
};

export default HomePage;
