import React, { useEffect, useState } from 'react';
import Button from '../../components/button';
import Header from '../../components/Header';
import './index.css'
import api from "../../api/JSONAPI"
import Nuevo from '../../components/new';

const Main = () => {
  const [data, setData] = useState<any>([]);
  const getData = async () => {
    try {
      const data = await api.get("/marvel-characters?idAuthor=65")
      setData(data.data);

    } catch (err) {
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const deleteMovie = (id: any) => {
    try {
      api.delete(`/marvel-characters/${id}?idAuthor=65`).then(() => getData())

    } catch (err) {
    }
  }

  const [id, setId] = useState()
  const [form, setForm] = useState(false)
  const setAttribute = (value: any, id?: any) => {
    setId(id)
    setForm(value)
  }

  return (
    <div >
      <Header />
      <Button setAttribute={setAttribute} />
      {form === true ? <Nuevo setAttribute={setAttribute} id={id} getData={getData} /> : ''}
      <div >
        {data.map((item: any) => (
          <div className='background-img'>
            <div >
              <img src={item.image} width="90%" alt="" />
            </div >
            <div className='title'>{item.title}</div>
            <div className='size-edit'>
              <button className='button' onClick={() => (setAttribute(true, item._id))}>edit</button>
              <button className='button' onClick={() => deleteMovie(item._id)} >delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Main;
