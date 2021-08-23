import { Button } from "@material-ui/core";
import { useState } from "react";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import "./styles.css";
import { login } from "../../features/UseSlice";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("")
  const dispatch = useDispatch()
 const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((userAuth) => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        name: userAuth.user.displayName,
        photoURL: userAuth.user.photoURL
      }))
    })
    setEmail('')
    setPassword('')
  };


  const handleRegister = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then(
      (userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: ''
        }).then(() => {
          dispatch(login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            name: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL
          }))
        })
      }
    )
    setName('')
    setEmail('')
    setPassword('')

  };


  
  return (
    <>
   {register ?  <div className="login">
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
          <form onSubmit={handleSubmit}>
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
            <br/>
            <Button 
             variant='contained'
             color='primary'
             disableElevation
             type='submit'>Iniciar Sesion

            </Button>
          </form>
        </div>
        <p className='login__footer'>¿Eres Nuevo en LinkedIn
         <span onClick={() => setRegister(false)}>Unete ahora</span></p>
      </div>
    </div>
    : <div className="login register">
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
          <form onSubmit={handleRegister}>
          <div className="div__input register">
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="div__input register">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="div__input register">
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p>Al hacer Click en Aceptar "Aceptar y Unirse", acepts las <span>aceptas las condiciones de uso </span> y la <span>Politica de cookies</span>LinkedIn</p>
            <br/>
            <Button 
             variant='contained'
             color='primary'
             disableElevation
             type='submit'>Aceptar y Unirse

            </Button>
          </form>
        </div>
        <p className='login__footer'>¿Ya eres usuario de linkedln?{""}
         <span onClick={() => setRegister(true)}>Iniciar sesion</span></p>
      </div>
    </div>

   }
   </>
  );
};
