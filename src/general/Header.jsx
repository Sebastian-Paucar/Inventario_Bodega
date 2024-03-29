import React from "react";
import { Card } from 'primereact/card';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'primeicons/primeicons.css';
        
import {
  faUser,
  faSignOutAlt,
  faKey,
  faBoxOpen,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "react-bootstrap";

const Header = ({ userName, onLogout }) => {
  const navigate = useNavigate();

  const handleBrandClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleNavigation = (path) => (e) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="Card">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div className="container-fluid">
        <a className="navbar-brand" href="/" onClick={handleBrandClick}>
          ElBo degon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {userName && (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/items"
                  onClick={handleNavigation("/items")}
                >
                 <i className="pi pi-eye"></i>  Ver Productos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/add-item"
                  onClick={handleNavigation("/add-item")}
                >
                  <i className="pi pi-plus"></i> Agregar Producto
                </a>
              </li>
            </ul>
          </div>
        )}

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            {userName ? (
              <>
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <FontAwesomeIcon icon={faUser} /> {userName}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="/change-password"
                      onClick={handleNavigation("/change-password")}
                    >
                      <FontAwesomeIcon icon={faKey} /> Cambiar contraseña
                    </Dropdown.Item>
                    <Dropdown.Item onClick={onLogout}>
                      <FontAwesomeIcon icon={faSignOutAlt} /> Cerrar sesión
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/register"
                    onClick={handleNavigation("/register")}
                  >
                    Registro
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/login"
                    onClick={handleNavigation("/login")}
                  >
                    Iniciar Sesión
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

    
    </nav>
</div>
    
  );
};

export default Header;
