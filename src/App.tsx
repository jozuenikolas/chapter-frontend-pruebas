import CharacterList from './components/CharacterList'
import Loading from './components/ui/Loading'
import ModifyCharacter from './components/ModifyCharacter'
import SearchSection from './components/SearchSection'
import { useAppSelector } from './store/hooks'

const App = () => {
  const characterState = useAppSelector((state) => state.state.characterState)
  const searchingState = useAppSelector((state) => state.state.searchingState)
  return (
    <div className="flex flex-col px-4 mx-auto mt-5">
      <SearchSection />
      <div className="self-center">
        {searchingState ? <Loading loading={true} /> : <CharacterList />}
      </div>
      {characterState === 'create' && <ModifyCharacter type="add" />}
      {characterState === 'edit' && <ModifyCharacter type="edit" />}
    </div>
  )
}

export default App
