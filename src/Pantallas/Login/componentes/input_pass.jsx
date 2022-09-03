import * as React from "react";
import TextField from "@mui/material/TextField";

function Input_pass() {
  return (
    <TextField
      name="Inpt_pass"
      type="password"
      placeholder="Contraseña"
      label="Contraseña"
      variant="outlined"
      id="Inpt_pass"
    />
  );
}

export default Input_pass;
