import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Header } from "./Components/Header";

import { login, logout, selectUser } from "./features/UseSlice";
import { auth } from "./firebase";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from "./Pages/Home";
import { MiRed } from "./Pages/MiRed";
import { Empleos } from "./Pages/Empleos";
import { Notificaciones } from "./Pages/Notificaciones";
import { Mensajes } from "./Pages/Mensajes";
import { InicialSecion, InicialSesion, IniciarSesion, Login } from "./Pages/Login";
import { Registrar } from "./Pages/Login/Registrar";
function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
   auth.onAuthStateChanged(userAuth => {
     if(userAuth){
       dispatch(login({
         email: userAuth.user,
         uid: userAuth.user,
         name: userAuth.user,
         photoURL: userAuth.user,
       }))}
   })
  },[])



  return (
    <div className="App">
      { user ? 
        <>
        <BrowserRouter>
          <Header />
            <div className="wrapper">
              
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/mynetwork" component={MiRed}/>
                  <Route exact path="/jobs" component={Empleos}/>
                  <Route exact path="/messaging/thread/new" component={Mensajes}/>
                  <Route exact path="/notifications" component={Notificaciones}/>
                  <Route exact path="/registrar" component={Registrar}/>
                </Switch>
              
            </div>
            </BrowserRouter>
        </>
        : <Login/>
      }
    </div>
  );
}

export default App;
