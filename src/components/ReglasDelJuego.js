import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Volver from "./Volver";

export default function ReglasDelJuego(){

    return(
        <Container>
            <Row className="justify-content-md-center mb-4">
                <h1 className="text-center" > Reglas del Juego</h1>
                <p className="text-center" > Piedra Papel y Tijera</p>
            </Row>
            <Row className="justify-content-md-center">
                <Col className="col-sm-8">
                    <h3 className="text-center">Instrucciones:</h3>
                    <p className="text-center">Los jugador1 y jugador2 eligiran mano al azar, ¡piedra, papel o tijera!»</p>
                    <ul>
                        <li>Piedra: un puño cerrado.</li>
                        <li>Papel: todos los dedos extendidos, con la palma de la mano de lado</li>
                        <li>Tijera: dedos índice separados formando una «V».</li>
                    </ul>
                    <p className="text-center">El objetivo es vencer al oponente seleccionando la mano que gana, según las siguientes reglas:</p>
                    <ul>
                        <li>La piedra aplasta la tijera. (Gana la piedra.)</li>
                        <li>La tijera corta el papel. (Gana la tijera.)</li>
                        <li>El papel envuelve la piedra. (Gana el papel.)</li>
                        <li>En caso de empate (que dos jugadores elijan el mismo elemento o que tres jugadores elijan cada uno un objeto distinto), se juega otra vez.</li>
                    </ul>
                    <p className="text-center">Gana el jugador que tiene mas Victorias.:</p>
	            </Col>                
            </Row>
            <Row className="justify-content-md-center">
                <Volver/>
            </Row>
        </Container>
    );
}