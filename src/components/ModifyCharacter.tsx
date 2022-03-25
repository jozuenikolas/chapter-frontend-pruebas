import Button from './ui/Button'
import Input from './ui/Input'
import InputArea from './ui/InputArea'
import isUrl from 'validator/lib/isUrl'
import { Character, CreateCharacter } from '../types/character'
import { createCharacterFromAPI, editCharacterByIdFromAPI } from '../api'
import { editCharacter, setSelectedCharacter } from '../store/charactersSlice'
import { setCharacterState } from '../store/stateSlice'
import { useAppSelector } from '../store/hooks'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

interface ModifyCharacterType {
  type: 'add' | 'edit'
}

const ModifyCharacter: React.FC<ModifyCharacterType> = ({ type }) => {
  const selectedCharacter = useAppSelector((state) => state.characters.selectedCharacter)
  const dispatch = useDispatch()

  const [title, setTitle] = useState(selectedCharacter?.title ?? '')
  const [body, setBody] = useState(selectedCharacter?.body ?? '')
  const [image, setImage] = useState(selectedCharacter?.image ?? '')
  const [isDisabled, setIsDisabled] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    setMessage('')
    if (title && body && isUrl(image)) {
      setIsDisabled(false)
    } else {
      setIsDisabled(true)
    }
  }, [title, body, image])

  const handleClose = () => {
    dispatch(setSelectedCharacter(null))
    dispatch(setCharacterState(null))
  }

  const handleCreateCharacter = async () => {
    if (!title || !body || !isUrl(image)) return

    const newCharacter: CreateCharacter = {
      title,
      body,
      image,
      category: 'main',
    }

    try {
      setIsLoading(true)
      setMessage('')
      setError('')
      const res = await createCharacterFromAPI(newCharacter)
      setMessage(res.message)
      setIsLoading(false)
    } catch (e: any) {
      setError(e.message)
      setIsLoading(false)
    }
  }

  const handleEditCharacter = async () => {
    if (!title || !body || !isUrl(image)) return
    if (!selectedCharacter) return
    const editedCharacter: Character = {
      ...selectedCharacter,
      title,
      body,
      image,
    }

    try {
      setIsLoading(true)
      setMessage('')
      setError('')
      const res = await editCharacterByIdFromAPI(selectedCharacter._id, editedCharacter)
      dispatch(editCharacter({ id: selectedCharacter._id, character: editedCharacter }))
      setMessage(res.message)
      setIsLoading(false)
    } catch (e: any) {
      setError(e.message)
      setIsLoading(false)
    }
  }

  return (
    <div className="p-4 bg-white border-gray-300 border-[1px] my-4">
      <h1 className="text-2xl font-semibold text-center text-gray-400">
        {type === 'add' ? 'Nuevo Personaje' : 'Editar Personaje'}
      </h1>
      <Input
        text="Nombre"
        placeholder="Nombre"
        initialValue={title}
        onChange={(e) => {
          setTitle(e)
        }}
      />
      <InputArea
        text="Descripcion"
        placeholder="Descripcion"
        initialValue={body}
        onChange={(e) => {
          setBody(e)
        }}
      />
      <Input
        text="Imagen"
        placeholder="URL"
        initialValue={image}
        onChange={(e) => {
          setImage(e)
        }}
      />
      <div className="flex justify-evenly">
        <Button
          text="Guardar"
          icon="save"
          disabled={isDisabled}
          isLoading={isLoading}
          onClick={type === 'add' ? handleCreateCharacter : handleEditCharacter}
        />
        <Button text="Cancelar" icon="close" onClick={handleClose} />
      </div>
      <p className="mt-2 text-red-500">{error}</p>
      <p className="mt-2 text-green-500">{message}</p>
    </div>
  )
}

export default ModifyCharacter
