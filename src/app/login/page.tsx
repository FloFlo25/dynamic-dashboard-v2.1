import React from "react";
import TextInput from "../components/Inputs/TextInput";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <div className="flex flex-col">
        <TextInput label="Email" id="email" />
        <TextInput label="Password" id="password" />
      </div>
    </div>
  );
};

export default Login;
