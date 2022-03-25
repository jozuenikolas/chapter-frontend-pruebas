import Character from './Character'
import { Fragment } from 'react'
import { useAppSelector } from '../store/hooks'

const CharacterList = () => {
  const characters = useAppSelector((state) => state.characters.characters)
  return (
    <div className="my-4 space-y-3 ">
      {characters.map((character) => {
        return (
          <Fragment key={character._id}>
            <Character character={character} />
          </Fragment>
        )
      })}
    </div>
  )
}

export default CharacterList
