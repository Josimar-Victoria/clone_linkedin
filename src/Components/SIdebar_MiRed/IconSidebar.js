import React from "react";

export const IconSidebar = ({ Icon, title, color }) => {
  return (
    <div className="icon__input">
      <Icon style={{color:color}} />
      <h3>{title}</h3>
    </div>
  );
};