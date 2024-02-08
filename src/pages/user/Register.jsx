import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { auth } from "../../api/credenciales-config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { Card, Button, Form, Modal, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [errorAlertMessage, setErrorAlertMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      await updateProfile(user, { displayName: formData.name });

      setUser({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
      setShowModal(true);
      localStorage.setItem("userToken", await user.getIdToken());
      navigate("/home");
    } catch (error) {
      console.error("Error al registrar:", error.message);
      setShowErrorAlert(true);
      setErrorAlertMessage(
        "Error al registrar. Por favor, verifica tus datos e inténtalo de nuevo."
      );
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (

    <div className="flex align-items-center justify-content-center" style={{ minHeight: "90vh" }}>
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-4">
        <div className="text-center mb-5">
          <img src="https:github.com/Sebastian-Paucar.png" alt="hyper" height={50} className="mb-3" />
          <div className="text-900 text-3xl font-medium mb-3">Registro</div>
        </div>
        
        <Form onSubmit={handleRegistration}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mb-2">
              Registrar
            </Button>
          </Form>



      </div>
    </div>
  );
};

export default Register;
