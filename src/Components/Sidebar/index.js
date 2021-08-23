import { Avatar } from '@material-ui/core'
import { Add, TurnedIn } from '@material-ui/icons'
import React from 'react'
import './styles.css'
export const Sidebar = () => {

    const recientesItem = (topic) => (
        <div className="sidebar__recenItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img  src='https://img.freepik.com/vector-gratis/fondo-pintura-acuarela-rosa-vibrante_53876-58930.jpg?size=626&ext=jpg' alt='img'/>

                <Avatar className="sidebar__avatar"/>
                <h3>Json dev</h3>
                <h4>jsondevv@gamil.com</h4>
                <div  className="sidebar__contents">
                    <div className="sidebar__cont">
                      <p>Contacto</p>
                      <p>2</p>
                    </div>
                    <div className="sidebar__cont">
                        <p>
                            <a href="#">
                                Acceder a informacion y <br/>
                                herramientas exclusivas <br/>
                                {""}
                                <b>Prueba Premiun gratis durante q mess</b>{""}
                            </a>
                        </p>
                    </div>
                    <div className="sidebar__cont">
                        <div className="sidebar__marcadores">
                            <TurnedIn className='sidebar__icons'/> Marcador
                        </div>
                    </div>
                 </div>
            </div>

            <div className="sidebar__bottom">
                <ul>
                    <li>
                        <p>Grupos</p>
                    </li>
                    <li>
                        <p>Eventos</p>
                    </li>
                    <li>
                        <p>Hastags seguidores</p>
                    </li>
                </ul>
                <Add className="sidebar__box"/>
            </div>
            <div className="sidebar__recientes">
                <p>Recientes</p>
                {recientesItem("react.js")}
                {recientesItem("node.js")}
                {recientesItem("firebase.js")}
                {recientesItem("grasplq")}
                {recientesItem("developer")}
                {recientesItem("design")}
            </div>
        </div>
    )
}
