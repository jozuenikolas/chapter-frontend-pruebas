import Button from './ui/Button'
import Search from './ui/Search'
import { debounce } from 'lodash'
import { getCharactersByTitleFromAPI } from '../api/get'
import { setCharacters, setSelectedCharacter } from '../store/charactersSlice'
import { setCharacterState, setSearchingState } from '../store/stateSlice'
import { useAppDispatch } from '../store/hooks'
import { useCallback, useEffect, useState } from 'react'

const SearchSection = () => {
  const dispatch = useAppDispatch()
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (search.length > 2) {
      debounceSearch(search)
    }
  }, [search])

  const debounceSearch = useCallback(
    debounce(async (search) => {
      try {
        dispatch(setSearchingState(true))
        const _characters = await getCharactersByTitleFromAPI(search)
        dispatch(setCharacters(_characters))
        dispatch(setSearchingState(false))
      } catch (e) {
        dispatch(setSearchingState(false))
      }
    }, 500),
    []
  )

  const handleNew = () => {
    dispatch(setCharacterState(null))
    dispatch(setSelectedCharacter(null))
    setTimeout(() => {
      dispatch(setCharacterState('create'))
    }, 10)
  }
  return (
    <div className="my-4">
      <h1 className="mb-2 text-2xl font-semibold text-gray-400">Listado de personajes</h1>
      <div className="flex justify-between">
        <Search text="Buscar" onChange={(e) => setSearch(e)} />
        <Button text="Nuevo" icon="add" onClick={handleNew} />
      </div>
    </div>
  )
}

export default SearchSection
