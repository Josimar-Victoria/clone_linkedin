import React from "react";
import { Avatar } from "@material-ui/core";
import "./styles.css";
export const HeaderIcons = ({ Icon, title, text, avatar }) => {
  return (
    <div className="header__icons">
      {Icon && <Icon className="header__box" />}
      {avatar && <Avatar className="header__box" />}
      {title ? <h5>{title}</h5> : <h5 className="header__premium">{text}</h5>}
    </div>
  );
};
