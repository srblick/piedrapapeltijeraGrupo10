// import './App.css';
import React, { useState } from "react";

function random(){
    const [numero, setNumero] = useState((Math.floor(MathRandom()*3)));

    return(
        <div><h1>Numero al azar {numero}</h1></div>
    )
};

switch(numero){
    case 1: numero = 1;
        break;
    case 2: numero = 2;
        break;
    case 3: numero = 3;
         break;
};