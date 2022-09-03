import * as React from "react";
import TextField from "@mui/material/TextField";

function Input_correo() {
  return (
    <TextField
      // html input attribute
      name="Inpt_email"
      type="email"
      placeholder="correo@email.com"
      // pass down to FormLabel as children
      label="Correo Electrónico"
      id="Inpt_email"
    />
  );
}

export default Input_correo;
