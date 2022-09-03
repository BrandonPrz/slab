import * as React from "react";
import Input_correo from "./componentes/input_correo";
import Input_pass from "./componentes/input_pass";
import { Button, Link as Enlace } from "@mui/material";
import Logo from "./images/logo.png";
import Boton_atras from "./componentes/boton_atras";
import { Link, Route, Switch } from "react-router-dom";

function Login() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <img src={Logo} alt="Logo sislab" />
          <br />
          <h2>Inicia Sesión</h2>
          <br />
          <Input_correo />
          <br />
          <br />
          <Input_pass />
          <br />
          <div>
            <Link to="/recuperacion">
              <Enlace color="#00C795">¿Olvidaste tu contraseña?</Enlace>
            </Link>
          </div>
          <br />
          <br />
          <Button
            variant="contained"
            color="success"
            size="large"
            id="Btn_login"
          >
            Iniciar Sesión
          </Button>
          <br />

          <div>
            <Link to="/ayuda">
              <Enlace color="#00C795">¿Problemas para iniciar sesión?</Enlace>
            </Link>
          </div>
        </Route>
        <Route exact path="/recuperacion">
          <Recuperacion />
        </Route>
        <Route exact path="/ayuda">
          <Ayuda />
        </Route>
      </Switch>
    </div>
  );
}

function Ayuda() {
  return (
    <div>
      <h3>¿Estás registrado?</h3>

      <h4>
        Te recordamos que esta aplicación es sólo para el uso del personal de la
        Universidad de Sonora.
      </h4>
      <h4>
        El personal del Departamento de Ciencias Químico Biológicas debe de
        otorgarte tus credenciales para poder acceder.
      </h4>
      <h3>¿No puedes iniciar sesión?</h3>
      <h4>Si necesitas recuperar tu contraseña</h4>
      <Link color="#00C795" href="/">
        haz click aquí
      </Link>
      <h4>
        Si presentas problemas para iniciar sesión puedes mandar un correo a la
        siguiente dirección: soporte@sislab.com.mx
      </h4>
      <Boton_atras />
    </div>
  );
}

function Recuperacion() {
  return (
    <div>
      <h3>Recuperar contraseña</h3>
      <h4>Ingresa el correo con el que estás registrado en el sistema</h4>
      <Input_correo />
      <Boton_atras />
      <Button variant="contained" color="success" size="large" id="Btn_sig">
        Siguiente
      </Button>
    </div>
  );
}

export default Login;
