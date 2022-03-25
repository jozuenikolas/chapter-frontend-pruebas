import React from 'react';
import { useState } from 'react';


function Buscar () {

  const [data, setData] = useState<any>([]);
  const getData = async () => {
    try {
      const data =   fetch('https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=42')
      .then(response => response.json())
      .then(data => setData(data ));

    } catch (err) {
      console.log(err);
    }
  
  }
  return (
    <div>
  
    {data.map((item: any) => (
      <div>
        <div >
          <img src={item.image} width="90%" alt="" />
        </div >
        <div className='title'>{item.title}</div>
        <div>
          <button className='button'>edit</button>
          <button className='button'>delete</button>
        </div>
      </div>
    ))}
  </div>
  );
}

export default Buscar;
