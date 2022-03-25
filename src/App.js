import { useEffect, useState } from 'react';
import { getCharacters, deleteCharacter, postCharacters } from './api/Marvel';
import CharacterList from './components/organisms/CharacterList/CharacterList';
import MarvelForm from './components/templates/MarvelForm/MarvelForm';

function App() {
  const [characters, setcharacters] = useState([]);
  const [showForm, setshowForm] = useState(false);
  const [loading, setloading] = useState(false);

  const getCharactersForApi = async () => {
    const { data } = await getCharacters();
    setcharacters(data);
  };

  const deleteCharacterForApi = async (id) => {
    await deleteCharacter(id);
    await getCharactersForApi();
  };

  const createCharacterForApi = async (data) => {
    setloading(true);
    await postCharacters(data);
    await getCharactersForApi();
    setloading(false);
    setshowForm(false);
  };

  useEffect(() => {
    getCharactersForApi();
  }, []);

  return (
    <div>
      {
        (characters.length > 0) &&
        <CharacterList
          characters={characters}
          onClickErase={(id) => deleteCharacterForApi(id)}
          onClickCreate={() => setshowForm(true)}
        >
          {
            showForm &&
            <MarvelForm
              onClickCancel={() => setshowForm(false)}
              onClickSave={(data) => createCharacterForApi(data)}
              loading={loading}
            />
          }
        </CharacterList>
      }
    </div>
  );
}

export default App;
