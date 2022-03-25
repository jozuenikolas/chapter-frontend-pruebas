import React, { ChangeEvent, useEffect, useState } from 'react'
import './index.css'
import api from "../../api/JSONAPI"

interface ButtonProps {
  setAttribute(value: any): void
  getData?(): void
  id?: string
}

export const Nuevo: React.FC<ButtonProps> = ({ setAttribute, id, getData }) => {
  const handleOnChange = () => {
    setAttribute(false)
  }
  const [form, setForm] = useState({ title: "", body: "", image: "", category: "main", createdAt: "", updatedAt: "" })


  const value = (name: any, event: ChangeEvent<HTMLInputElement>) => {
    console.log(event?.target.value)
    setForm((oldValue) => ({ ...oldValue, [name]: event.target.value }))

  }


  const create = () => {
    if (id) {
      const postExams = async () => await api.put(`/marvel-characters/${id}?idAuthor=65`, form).then(getData)
      postExams();
    } else {
      const postExams = async () => await api.post('/marvel-characters?idAuthor=65', form).then(getData)
      postExams();
    }
    id = undefined
  }



  return (
    <div className="container" >

      {id ? 'Editar personaje' : 'Nuevo personaje'}
      <div className='input-container'>
        <div className='descripcion'>Nombre:</div>
        <input placeholder='Nombre' className='size-input' onChange={(event) => (value('title', event))} type="text" />
        <div className='descripcion'>Descripcion:</div>
        <input placeholder='Descripcion' className='size-input' onChange={(event) => (value('body', event))} type="text" />
        <div className='descripcion'>Imagen:</div>
        <input placeholder='Imagen' className='size-input' onChange={(event) => (value('image', event))} type="text" />
      </div>
      <div className='size-edit'>
        <button className='buttons' onClick={create}>Guardar</button>
        <button className='buttons' onClick={() => (handleOnChange())}>Cancelar</button>
      </div>
    </div>
  )
}

export default Nuevo;
