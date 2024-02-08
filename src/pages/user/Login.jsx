import { useState } from "react";
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
//import { Button } from 'primereact/button';    
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { auth } from "../../api/credenciales-config";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { isEmail } from "validator"; // Importa la función isEmail de validator
import "primeflex/primeflex.css";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorAlert, setErrorAlert] = useState(null);

  const handleSignInWithEmailAndPassword = async (e) => {
    e.preventDefault();
    if (!isEmail(email)) {
      setErrorAlert("Por favor, ingresa un correo electrónico válido.");
      return;
    }
    if (password.length < 6) {
      setErrorAlert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        const token = await user.getIdToken();

        if (token) {
          setUser({
            displayName: user.displayName || "Usuario sin nombre",
            email: user.email,
            photoURL: user.photoURL,
          });
          setShowModal(true);
          localStorage.setItem("userToken", token);
          setErrorAlert(null);
          navigate("/home");
        }
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      setErrorAlert("Usuario o contraseña incorrectos.");
    }
  };

  return (


    <div className="flex align-items-center justify-content-center" style={{ minHeight: "90vh" }}>
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-4">
        <div className="text-center mb-5">
          <img src="https:github.com/Sebastian-Paucar.png" alt="hyper" height={50} className="mb-3" />
          <div className="text-900 text-3xl font-medium mb-3">Inicio de Sesion</div>

        </div>
        {errorAlert && <Alert variant="danger">{errorAlert}</Alert>}
        <form onSubmit={handleSignInWithEmailAndPassword}>
          <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password" type="password" placeholder="Password" className="w-full mb-3" onChange={(e) => setPassword(e.target.value)} />


            <Button variant="primary" type="submit" className="w-100 mb-2">
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default Login;
