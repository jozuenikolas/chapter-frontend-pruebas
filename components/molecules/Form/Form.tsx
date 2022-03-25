import { FormStyles } from './styles'

import React, { useState } from 'react'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'
import SaveIcon from '../../../shared/icons/Save'
import CancelIcon from '../../../shared/icons/Cancel'

interface FormProps {
  onCancelClick: Function
}

const Form: React.FC<FormProps> = ({ onCancelClick }) => {
  const [heroName, setHeroName] = useState<string>('')
  const [heroDescription, setHeroDescription] = useState<string>('')
  const [heroImage, setHeroImage] = useState<string>('')

  const addHero = async () => {
    try {
      const data = await fetch(
        `https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=62`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({
            title: heroName,
            body: heroDescription,
            image: heroImage,
            category: 'main',
            idAuthor: '62',
          }),
        }
      )
      const json = await data.json()
      //setHeroesInfo(json)
      console.log(json.message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FormStyles>
      <Input
        value={heroName}
        onChange={(event) => {
          setHeroName(event?.target.value)
        }}
        placeholder="Name"
        label="Nombre:"
      />
      <Input
        value={heroDescription}
        onChange={(event) => {
          setHeroDescription(event?.target.value)
        }}
        placeholder="Descripcion"
        label="Descripcion:"
      />
      <Input
        value={heroImage}
        onChange={(event) => {
          setHeroImage(event?.target.value)
        }}
        placeholder="URL"
        label="Imagen:"
      />
      <div className="buttons">
        <Button
          onClick={() => {
            addHero()
          }}
          icon={<SaveIcon fill="#fff" />}
        >
          Guardar
        </Button>
        <Button
          icon={<CancelIcon fill="#fff" />}
          onClick={() => {
            onCancelClick && onCancelClick()
          }}
        >
          Cancelar
        </Button>
      </div>
    </FormStyles>
  )
}

export default Form
