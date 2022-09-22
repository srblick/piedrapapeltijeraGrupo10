import '../App.css';
import Inicio from '../img/inicio.jpg';
import {Link} from 'react-router-dom';

function inicio(){

    return(
        <div>
            <h1>Piedra Papel o Tijera</h1>
            <img src={Inicio} alt="Game"> </img>
            <Link to='/game' className="">A Jugar</Link>
            <Link to='/des' className="">Desarrolladores</Link>
        </div>
    );

}

export default Inicio;