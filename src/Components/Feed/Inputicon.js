import "./styles.css";

export const Inputicon = ({ Icon, title, color }) => {
  return (
    <div className="icon__input">
      <Icon style={{ color: color }} />
      <h3>{title}</h3>
    </div>
  );
};
