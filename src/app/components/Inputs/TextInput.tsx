import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

const TextInput = (props: TextFieldProps) => {
  return <TextField {...props} sx={{ borderRadius: "20px", border: "red" }} />;
};

export default TextInput;
