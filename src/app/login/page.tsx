import { TextField } from "@mui/material";
import React from "react";

const Login = () => {

  return (
    <div>
      <h1>Login</h1>
      <div className="flex flex-col">
        <TextField label="Email" id="email"/>
        <TextField label="Password" id="password"/>
        
      </div>
    </div>
  );
};

export default Login;
