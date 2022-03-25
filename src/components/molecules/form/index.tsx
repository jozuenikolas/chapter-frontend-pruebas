import { useEffect, useState } from "react"
import { authorId } from "../../../const"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { useCreateHeroeMutation, useUpdateHeroeMutation } from "../../../services"
import { setFormOpen } from "../../../store/reducers/app"
import { Button } from "../../atoms/button"
import { Input } from "../../atoms/input"
import { Title } from "../../atoms/title"
import './index.css'

const form = {
  title: '',
  body: '',
  image: '',
  _id: ''
}

export const Form = () => {

  const dispatch = useAppDispatch()
  const selectdHeroe = useAppSelector(store => store.app.selectedHeroe)
  const [createHeroe] = useCreateHeroeMutation()
  const [updateHeroe] = useUpdateHeroeMutation()

  const [formValue, setFormValue] = useState(selectdHeroe ? selectdHeroe : form)

  const onchangeValue = (attribute: string) => (value: string) => {
    setFormValue((formVal) => (
      {
        ...formVal,
        [attribute]: value
      }
    ))
  }

  const handleOnCancel = () => {
    dispatch(setFormOpen(false))
  }

  const handleOnSave = () => {
    const body = {
      title: formValue.title,
      body: formValue.body,
      image: formValue.image,
      category: "main",
      idAuthor: authorId,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    if (formValue._id) {
      updateHeroe({ id: formValue._id, body: body })
      dispatch(setFormOpen(false))
    } else {
      createHeroe(body)
      dispatch(setFormOpen(false))
    }

  }

  return (
    <div className='form'>
      <Title> Nuevo Personaje </Title>
      <div className='form-input'>
        <Input placeholder='Nombre' label='Nombre:' initialValue={formValue.title} onChange={onchangeValue('title')} />
      </div>
      <div className='form-input'>
        <Input placeholder='Description' initialValue={formValue.body} label='Descriptcion' onChange={onchangeValue('boby')} />
      </div>
      <div className='form-input'>
        <Input placeholder='URL'  initialValue={formValue.image} label='Imagen:' onChange={onchangeValue('image')} />
      </div>
      <div className='form-buttons-container'>
        <Button width='120px' onclick={handleOnSave}>
          <span className="material-icons">save</span>
          Guadar
        </Button>
        <Button width='120px' onclick={handleOnCancel}>
          <span className="material-icons">close</span>
          Cancelar
        </Button>
      </div>
    </div>
  )
}