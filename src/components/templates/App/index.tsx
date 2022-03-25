import axios from 'axios'
import { useState, useEffect } from 'react'

import { Input, Button } from 'components/atoms'
import List from 'components/templates/List'
import Form from 'components/templates/Form'

import './index.css'
import ICharacter from './interface'

function App() {
  const [character, setCharacter] = useState<ICharacter>()
  const [characters, setCharacters] = useState<Array<ICharacter>>()
  const [mode, setMode] = useState<'list' | 'edit' | 'delete'>('list')
  const [filter, setFilter] = useState<string>('')

  useEffect(() => {
    if (characters)
      return

    axios.get('https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=64')
      .then((response) => {
        setCharacters(response.data)
        setCharacters(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  useEffect(() => { }, [mode, characters])
  
  useEffect(() => {

  }, [mode, filter, characters])


  const handleEdit = (id: string) => {
    setMode('edit')
    setCharacter(characters?.find(element => element._id === id))
  }

  const handleDelete = (id: string) => {
    console.log(id)
  }

  const handleSave = () => {
    console.log('save')
    setMode('list')
  }

  const handleCancel = () => {
    setMode('list')
  }

  return (
    <div className="app">
      <h1>Listado de personajes</h1>

      <div className='search'>
        <div className='search-input'><Input value={filter} handleChange={(value) => setFilter(value)} /></div>
        <div className='search-button'><Button {...{ icon: 'add', text: 'Nuevo', handleClick: () => console.log('nuevo') }} /></div>
      </div>

      {
        characters && mode === 'list' && <List {...{ characters, filter, handleEdit, handleDelete }} />
      }

      {
        !characters && mode === 'list' && <div>Loading...</div>
      }

      {
        mode === 'edit' && <Form {...{ character, handleSave, handleCancel }} />
      }

    </div>
  )
}

export default App
