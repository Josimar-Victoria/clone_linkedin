import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { Header } from "./Components/Header";
import { Login } from "./Components/Login";
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
function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()



  return (
    <div className="App">
      { user ? 
        <>
          <Header />
            <div className="wrapper">
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/mynetwork" component={MiRed}/>
                  <Route exact path="/jobs" component={Empleos}/>
                  <Route exact path="/messaging/thread/new" component={Mensajes}/>
                  <Route exact path="/notifications" component={Notificaciones}/>
                </Switch>
              </BrowserRouter>
            </div>
        </>
        : <Login/>
      }
    </div>
  );
}

export default App;
