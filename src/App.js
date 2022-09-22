import './App.css'

import Inicio from './componentes/inicio';
import Game from './componenetes/game';
import Des from './des';
import {BrowserRouter as Router, Routers, Route} from 'react-router-dwon';

function App(){
    return(
        <Router>
            <Router path='/' elemnt={<Inicio/>}></Router>
            <Router path='/game' elemnt={<Game/>}></Router>
            <Router path='/des' elemnt={<Des/>}></Router>
        </Router>
    )
}

export default App