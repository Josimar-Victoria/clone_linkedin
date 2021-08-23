import {
  Create,
  Event,
  Photo,
  VerticalSplit,
  YouTube,
} from "@material-ui/icons";
import { useState } from "react";
import { Inputicon } from "./Inputicon";
import { Post } from "./Post";
import "./styles.css";
export const Feed = () => {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  const sendPost = (e) => {
    e.preventDefault();
    setInputValue("");
  };
  return (
    <div className="feed">
      <div className="feed__container_Input">
        <div className="feed__input">
          <Create className="feed__icons_input" />
          <form className="">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Crear Publication"
            />
            <button onClick={sendPost} type="submit">
              Enviar
            </button>
          </form>
        </div>
        <div className="fee__input_icons">
          <Inputicon Icon={Photo} title="Fotos" color="#70b5f9" />
          <Inputicon Icon={YouTube} title="Videos" color="#7fc15e" />
          <Inputicon Icon={Event} title="Eventos" color="#e7a33e" />
          <Inputicon
            Icon={VerticalSplit}
            title="Escribir articulo"
            color="#fc9295"
          />
        </div>
      </div>
      <Post
        name="Json dev"
        description="Jsondev@gmail.com"
        mensaje="Hola mundo"
        PhotoURL="https://images.unsplash.com/photo-1574168849546-427632ef799e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=691&q=80"
        images="https://images.unsplash.com/photo-1585576845293-cfed4a8795c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />

      <Post
        name="Json dev"
        description="Jsondev@gmail.com"
        mensaje="Hola mundo"
        PhotoURL="https://images.unsplash.com/photo-1574168849546-427632ef799e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=691&q=80"
        images="https://images.unsplash.com/photo-1585576845293-cfed4a8795c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />

      <Post
        name="Json dev"
        description="Jsondev@gmail.com"
        mensaje="Hola mundo"
        PhotoURL="https://images.unsplash.com/photo-1574168849546-427632ef799e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=691&q=80"
        images="https://images.unsplash.com/photo-1585576845293-cfed4a8795c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />

      <Post
        name="Json dev"
        description="Jsondev@gmail.com"
        mensaje="Hola mundo"
        PhotoURL="https://images.unsplash.com/photo-1574168849546-427632ef799e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=691&q=80"
        images="https://images.unsplash.com/photo-1585576845293-cfed4a8795c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />

      <Post
        name="Json dev"
        description="Jsondev@gmail.com"
        mensaje="Hola mundo"
        PhotoURL="https://images.unsplash.com/photo-1574168849546-427632ef799e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=691&q=80"
        images="https://images.unsplash.com/photo-1585576845293-cfed4a8795c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />

      <Post
        name="Json dev"
        description="Jsondev@gmail.com"
        mensaje="Hola mundo"
        PhotoURL="https://images.unsplash.com/photo-1574168849546-427632ef799e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=691&q=80"
        images="https://images.unsplash.com/photo-1585576845293-cfed4a8795c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
      />
    </div>
  );
};
