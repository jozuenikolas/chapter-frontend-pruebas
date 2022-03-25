import React from 'react';
function Eliminar () {
    const [data, setData] = React.useState()
    const funcion = () => {
      // setNumero(numero + 1)
      fetch('http://bp-marvel-api.herokuapp.com/:id?idAuthor=42')
        .then(response => response.json())
        .then(data => setData(data)
        );
    }

}

export default Eliminar;