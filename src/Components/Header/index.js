import React from "react";
import { HeaderIcons } from "./HeaderIcons";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import HomeIcon from "@material-ui/icons/Home";
import ChatIcon from "@material-ui/icons/Chat";
import {
  Apps,
  BusinessCenter,
  NotificationsActive,
  Search,
  SupervisorAccount,
} from "@material-ui/icons";
import "./styles.css";
import { auth } from "../../firebase";
import { logout } from "../../features/UseSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();

  const Salir = (e) => {
    auth.signOut();
    dispatch(
      logout({
        user: null,
      })
    );
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav_logo">
          <LinkedInIcon className="logo" />
        </Link>

        <div className="header__buscar">
          <Search />
          <input type="text" className="logo" placeholder="Buscar" />
        </div>
        <button onClick={Salir}>salir</button>
        <Link to="/">
          <HeaderIcons Icon={HomeIcon} title="Home" />
        </Link>
        <Link to="/mynetwork">
          <HeaderIcons Icon={SupervisorAccount} title="mi red" />
        </Link>
        <Link to="/jobs">
          <HeaderIcons Icon={BusinessCenter} title="Empleos" />
        </Link>
        <Link to="/messaging/thread/new">
          <HeaderIcons Icon={ChatIcon} title="Mensajes" />
        </Link>
        <Link to="/notifications">
          <HeaderIcons Icon={NotificationsActive} title="Notifications" />
        </Link>
        <Link to="/">
          <HeaderIcons avatar title="yo" />
        </Link>
        <Link to="/">
          <HeaderIcons Icon={Apps} title="Productos" />
        </Link>
        <Link to="/">
          <HeaderIcons Icon={ChatIcon} title="chat" />
        </Link>
        <Link to="/">
          <HeaderIcons text="Prueba Premiun gratis durantes 1 mess" />
        </Link>
      </nav>
    </header>
  );
};
