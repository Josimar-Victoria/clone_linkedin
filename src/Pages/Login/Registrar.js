import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../features/UseSlice";
import { auth } from "../../firebase";
import './styles.css';
export const Registrar = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: "",
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              name: userAuth.user.displayName,
              photoURL: userAuth.user.photoURL,
            })
          );
        });
    });
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <div className="login register">
        <div className="login__container">
          <div className="login__logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png"
              alt="LinkedIn"
            />
          </div>
          <div className="login__form">
            <h2 className="login__sesion">Registrate</h2>
            <p>Mantente al dia de tu mundo profesional</p>
            <form onsubmit={handleRegister}>
              <div className="div__input">
              <input
                  type="text"
                  placeholder="Nombre de usuario"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
            <Link to=''>
            <span>Iniciar secion</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
