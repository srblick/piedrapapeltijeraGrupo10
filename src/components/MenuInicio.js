import React from "react";
import imagen from "./images/Principal.jpg";
import estilo from "./styles/Menu.module.css";

export function MenuInicio(){

    return(
        <>
        <body className={estilo.main}>
        <header className={estilo.tamanio}>
            <h1 className="titulos">Piedra, Papel o Tijera</h1>
        </header>
            <main>
                <img className={estilo.imagenEdit}src={imagen} alt="imagen principal"/>
                <button className={estilo.boton} onClick="/juego">Empezar a jugar</button>
                <button className={estilo.boton} onClick="/reglasdeljuego">Reglas del Juego</button>
                <button className={estilo.boton} onClick="/desarrolladores">Desarrolladores</button>
            </main>
        <footer className={estilo.tamanio}>
            <h3 className="Pie">Diviértete!!</h3>
        </footer>
        </body>
        </>
    );
}
