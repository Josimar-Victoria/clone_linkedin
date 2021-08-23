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

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <LinkedInIcon className="logo" />
        <div className="header__buscar">
          <Search />
          <input type="text" className="logo" placeholder="Buscar" />
        </div>
        <HeaderIcons Icon={HomeIcon} title="Home" />
        <HeaderIcons Icon={SupervisorAccount} title="mi red" />
        <HeaderIcons Icon={BusinessCenter} title="Empleos" />
        <HeaderIcons Icon={ChatIcon} title="Mensajes" />
        <HeaderIcons Icon={NotificationsActive} title="Notifications" />
        <HeaderIcons avatar title="yo" />
        <HeaderIcons Icon={Apps} title="Productos" />
        <HeaderIcons Icon={ChatIcon} title="chat" />
        <HeaderIcons text="Prueba Premiun gratis durantes 1 mess" />
      </nav>
    </header>
  );
};
