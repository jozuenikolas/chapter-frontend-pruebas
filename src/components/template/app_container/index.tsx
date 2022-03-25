import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { useGetHeroesQuery } from "../../../services"
import { setHeroes, setName } from "../../../store/reducers/app"
import { Title } from "../../atoms/title"
import { Card } from "../../molecules/card"
import { Form } from "../../molecules/form"
import { Searcher } from "../../molecules/searcher"
import './index.css'

const AppContainer = () => {

  const dispatch = useAppDispatch()
  const { formOpen, name } = useAppSelector(store => store.app)
  const { data: heroes } = useGetHeroesQuery(name)

  useEffect(() => {
    if (heroes) {
      dispatch(setHeroes(heroes))
    }
  }, [heroes])



  return (
    <div className='container'>
      <Title> Lista de personajes </Title>
      <Searcher></Searcher>
      {
        formOpen &&
        <Form></Form>
      }
      {
        heroes &&
        <div className='heroes_container'>
          {heroes?.map((heore) => (
            <Card key={heore._id} heroe={heore}></Card>
          ))}
        </div>
      }
    </div>
  )

}

export default AppContainer
