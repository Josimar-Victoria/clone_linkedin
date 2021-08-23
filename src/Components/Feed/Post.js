import { Avatar } from "@material-ui/core";
import {
  ChatOutlined,
  SendOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { LikesPos } from "./LikesPos";

export const Post = ({ name, description, mensaje, PhotoURL, images }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={PhotoURL} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{mensaje}</p>
        {images ? <img src={images} alt="images" /> : ""}
      </div>
      <div className="post__buttom">
        <LikesPos Icon={ThumbUpAltOutlined} color="gray" title="Linke" />
        <LikesPos Icon={ChatOutlined} title="Comentar" color="gray" />
        <LikesPos Icon={SendOutlined} title="Compartir" color="gray" />
        <LikesPos Icon={SendOutlined} title="Enviar" color="gray" />
      </div>
    </div>
  );
};
