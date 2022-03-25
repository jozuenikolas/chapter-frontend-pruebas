import React from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import Buscar from '../src/components/Buscar';
import Crear from '../src/components/Crear';
import './App.css';



function App(this: any) {

  
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Listado de personajes
        </p>
        <div>
      
    </div>
    <body>  
      <form>
  <label>
    <input type="text" name="nombre"  onChange={Buscar} ></input>
  </label>
  <button className='button' onClick={Crear}>+ Nuevo</button>
  </form>

        <div>
        <Buscar/>
          </div>
          

    </body>
    
      </header>
      
    </div>
   

  );
}

export default App;
