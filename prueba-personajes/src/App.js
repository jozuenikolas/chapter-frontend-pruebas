import { useState, useEffect } from 'react';
import axios from 'axios';
import Personaje from './components/Personaje';
import './App.css';

function App() {
  const [personajes, setPersonajes] = useState([]);

  const renderPersonaje = (personaje, index) => (
    <div data-testid="personajesTestId" key={`personaje${index}Key`} className="personajes_items">
      <Personaje id={personaje._id} title={personaje.title} image={personaje.image} />
    </div>
  );

  useEffect(() => {
    axios.get('https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=4')
      .then(res => {
        setPersonajes(res.data);
      }).catch(err => {
        console.log(err)
      });
  }, []);

  return (
    <div className="App">
      <pichincha-typography variant="h4" align="center" color="darkGrey" >
        Listado de personajes
      </pichincha-typography>
      <div className='header'>
        <input type="text" id="lname" placeholder='Buscar' className='input_buscar' />
        <button className='boton_nuevo' variant="text">
          + Nuevo
        </button>
      </div>
      {
        personajes.map((personaje, index) => renderPersonaje(personaje, index))
      }
    </div>
  );
}

export default App;
