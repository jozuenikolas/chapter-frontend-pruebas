import Image from 'next/image'
import { useEffect, useState } from 'react'
import {HomeWrapper} from './styles'
import { fetchCharacters } from '../../../pages/api/marvel';
import MarvelBody from '@molecules/MarvelBody';

const Home = () => {

  const [people, setPeople] = useState([])


  useEffect(() => {
    fetchCharacters().then( (data) => setPeople(data) )
  }, [])
  

  return (
    <HomeWrapper>
      <h2 className='title'>Listado de Personajes</h2>
      <MarvelBody characters={people}/>
    </HomeWrapper>
  )
}

export default Home
