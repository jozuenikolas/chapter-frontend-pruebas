import { Button } from '../components/atoms/Button'
import type { NextPage } from 'next'
import { Input } from '../components/atoms/Input'
import PlusIcon from '../shared/icons/Plus'
import { Card } from '../components/molecules/Card'
import { useEffect, useState } from 'react'
import { HeroInterface } from '../shared/interface'
import Form from '../components/molecules/Form/Form'

const Home: NextPage = () => {
  const [heroes, setHeroesInfo] = useState<Array<HeroInterface>>([])
  const [heroName, setHeroName] = useState<string>('')
  const [showForm, setShowForm] = useState<Boolean>(false)

  const getHeroes = async () => {
    try {
      const data = await fetch(
        'https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=62'
      )
      const json = await data.json()
      setHeroesInfo(json)
      console.log(json)
    } catch (error) {
      console.log(error)
    }
  }

  const getHero = async (name: string) => {
    try {
      const data = await fetch(
        `https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=1&title=${name}`
      )
      const json = await data.json()
      setHeroesInfo(json)
      console.log(json)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getHeroes()
  }, [])

  useEffect(() => {
    const debouncer = setTimeout(() => {
      if (heroName.length > 0) {
        getHero(heroName)
      } else {
        getHeroes()
      }
    }, 800)

    return () => {
      clearTimeout(debouncer)
    }
  }, [heroName])

  return (
    <div className="main_container">
      <h1 className="title">Listado de Personajes</h1>

      <div className="input_container">
        <Input
          placeholder="Buscar"
          onChange={(event) => {
            setHeroName(event.target.value)
          }}
          value={heroName}
          className="input_spacer"
        />
        <div>
          <Button
            onClick={() => {
              setShowForm(true)
            }}
            icon={<PlusIcon fill="#fff" />}
          >
            Nuevo
          </Button>
        </div>
      </div>

      <div className="content_container">
        {showForm && (
          <Form
            onCancelClick={() => {
              setShowForm(false)
            }}
          />
        )}

        {heroes.length > 0 ? (
          heroes?.map((item, idx) => (
            <Card
              id={item._id}
              key={item._id}
              title={item.title}
              imgUrl={item.image}
            />
          ))
        ) : (
          <div>Not found</div>
        )}
      </div>
    </div>
  )
}

export default Home
