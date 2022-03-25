import CharacterButton from './ui/CharacterButton'
import { Character } from '../types/character'
import { deleteCharacter, setSelectedCharacter } from '../store/charactersSlice'
import { deleteCharacterByIdFromAPI } from '../api'
import { setCharacterState } from '../store/stateSlice'
import { useAppDispatch } from '../store/hooks'
import { useState } from 'react'

interface CharacterType {
  character: Character
}

const CharacterDisplay: React.FC<CharacterType> = ({ character }) => {
  const dispatch = useAppDispatch()

  const [isDeleting, setIsDeleting] = useState(false)

  const handleEdit = () => {
    dispatch(setSelectedCharacter(character))
    dispatch(setCharacterState(null))
    setTimeout(() => {
      dispatch(setCharacterState('edit'))
    }, 10)
  }

  const handleDelete = async () => {
    setIsDeleting(true)
    dispatch(setCharacterState(null))
    try {
      console.log(character._id)
      await deleteCharacterByIdFromAPI(character._id)
      setIsDeleting(false)
      dispatch(deleteCharacter(character._id))
    } catch (e: any) {
      setIsDeleting(false)
    }
  }

  return (
    <div className="p-2 bg-black .character">
      <img src={character.image} alt={character.title} />
      <h1 className="py-3 font-bold text-center text-white">{character.title}</h1>
      <div className="flex justify-evenly">
        <CharacterButton icon="edit" onClick={handleEdit} />
        <CharacterButton icon="delete" onClick={handleDelete} isLoading={isDeleting} />
      </div>
    </div>
  )
}

export default CharacterDisplay
