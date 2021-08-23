import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/UseSlice";
import { auth } from "../../firebase";

export const IniciarSesion = () => {
  const [register, setRegister] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          name: userAuth.user.displayName,
          photoURL: userAuth.user.photoURL,
        })
      );
    });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png"
            alt="LinkedIn"
          />
        </div>
        <div className="login__form">
          <h2 className="login__sesion">Iniciar sesion</h2>
          <p>Mantente al dia de tu mundo profesional</p>
          <form onsubmit={handleSubmit}>
            <div className="div__input">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="div__input">
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>¿Has olvidado tu contraseña?</p>
            <br />
            <Button
              variant="contained"
              color="primary"
              disableElevation
              type="submit"
            >
              Iniciar Sesion
            </Button>
          </form>
        </div>
        <p className="login__footer">
          ¿Eres Nuevo en LinkedIn
          <span onClick={() => setRegister(true)}>Unete ahora</span>
        </p>
      </div>
    </div>
  );
};
