import React from 'react';
import { useState } from 'react';

function Crear () {
  return(

    
        <div>
            <div>Nuevo personaje</div>
            <div>Nombre</div>
            <input></input>
            <div>Descripcion</div>
            <input></input>
            <div>Imagen</div>
            <input></input>
            <div>
               <label>
               <button className='button'>Guardar</button>
                </label>
                <label> 
                <button className='button'>Cancelar</button>
                </label>       
         
        </div>
        </div>


    

  );

}

export default Crear;