import { Button } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { actionsTypes } from "../../features/User";
import { login } from "../../features/UseSlice";
import { auth, provider } from "../../firebase";
import "./styles.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory()

  const handleIniciarSesion = (e) => {
   e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((userAuth) => 
    dispatch({
      type: actionsTypes.SET_USER,
      user: userAuth.user
    }))
    .catch((error) => alert(error.message));

  };

  const signIn = (e) => {
    auth
      .signInWithPopup(provider)
      .then((results) =>
        dispatch({
          type: actionsTypes.SET_USER,
          user: results.user,
        })
      )
      .catch((err) => alert(err));
  };

  return (
    <>
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
              <h2 className="login__sesion">Iniciar secion</h2>
              <p>Mantente al dia de tu mundo profesional</p>
              <form onsubmit={handleIniciarSesion}>
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
              
              <span >Unete ahora</span>
              

            </p>
          </div>
        </div>
      </div>
      <div className="login_gogol">
        <Button onClick={signIn} variant="contained" color="primary">
          Sign in with Google
        </Button>
      </div>
    </>
  );
};
