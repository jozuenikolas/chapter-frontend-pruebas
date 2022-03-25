import React, { useState, FC } from 'react'
import { useForm } from '../../../shared/hooks/useForm'
// import { PokemonCard } from './PokemonCard';
// import { PokemonCardDetail } from './PokemonCardDetail';
import { fetchCharacter, fetchCharacters } from '../../../pages/api/marvel';
import { ICharacter } from '../../../shared/interfaces';
import { Container } from './style';
import Character from '@atoms/Character';
import NewCharacter from '@molecules/NewCharacter';

interface Characters {
    characters: ICharacter[]
}

const MarvelBody: FC<Characters> = ({ characters }) => {

    // const [selectedPokemon, setSelectedPokemon] = useState();
    const [formValues, handleInputChange] = useForm({searchMarvel: ''});
    // @ts-ignore
    const { searchMarvel } = formValues;
    const [marvelSearch, setMarvelSearch] = useState<ICharacter[]>([]);
    const [showNewSecction, setShowNewSecction] = useState(false)
    const [notFound, setNotFound] = useState(false);

    const onSearch = async (marvel: string) => {
        if (!marvel) {
            setMarvelSearch([]);
            // setReload(true);
            setNotFound(false);
        } else {
            try {
                const result = await fetchCharacter(marvel.toLowerCase());
                if (!result) {                    
                    setNotFound(true);
                } else {
                    setMarvelSearch(result);
                    setNotFound(false);
                }
            } catch (err) {
                setNotFound(true);
            }
        }
      };
 // @ts-ignore
    const handleSearch = (e) => {
        e.preventDefault();
        // @ts-ignore
        onSearch(formValues.searchMarvel);
    }

    const onClickNew = () => {
        setShowNewSecction(true)
    }

    return (
        <Container>
            <div className='container-search'>
            <form onSubmit={handleSearch}>

            {/* al dar enter en el input de search se procede a la busqueda */}
                <input
                    type='text'
                    placeholder='Buscar'
                    className='box-search'
                    name='searchMarvel'
                    value={searchMarvel}
                    // @ts-ignore
                    onChange={handleInputChange}
                    autoComplete='off'
                />
            </form>
                <button onClick={onClickNew} className='button'>Nuevo</button>
            </div>

            <div className=''>
                { showNewSecction && <NewCharacter/>

                }
                {marvelSearch.length === 0 && characters.map( (char) => (
                    <Character key={char._id} character={char} />
                ) )

                }
                { marvelSearch.length > 0 && marvelSearch.map( (char) => (
                    <Character key={char._id} character={char} />
                ) )

                }
            </div>

                
        </Container>
    )
}

export default MarvelBody
