import * as React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Boton_atras() {
  return (
    <Link to="/">
      <Button name="Btn_back" variant="contained" color="success" size="large" id="Btn_back">
        Atrás
      </Button>
    </Link>
  );
}

export default Boton_atras;
