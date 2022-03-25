import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchSection from '../../molecules/SearchSection';
import Character from '../../molecules/Character';

const CharacterList = ({ characters, onClickCreate, onClickUpdate, onClickErase, children }) => {

    const [charactersToShow, setcharactersToShow] = useState(characters);
    const [inputValue, setinputValue] = useState('');

    useEffect(() => {
        setcharactersToShow(characters);
    }, [characters]);

    const filterCharacters = (e) => {
        const value = e.target.value;
        setinputValue(value);
        if (value.length === 0) setcharactersToShow(characters);
        else {
            const newArray = characters.filter(({ title }) => title.toUpperCase().includes(value.toUpperCase()));
            setcharactersToShow(newArray);
        }
    };

    return (
        <div>
            <div style={{ paddingBottom: 16 }}>
                <SearchSection
                    onClick={onClickCreate}
                    onChange={filterCharacters}
                    inputValue={inputValue}
                />
            </div>
            {children}
            {
                charactersToShow.map(({ _id, title, image }) => (
                    <div key={_id} style={{ paddingTop: 16 }}>
                        <Character
                            character={title}
                            image={image}
                            onClickUpdate={() => onClickUpdate(_id)}
                            onClickErase={() => onClickErase(_id)}
                        />
                    </div>
                ))
            }
        </div>
    )
}

CharacterList.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            title: PropTypes.string,
            _id: PropTypes.string
        })
    )
};

export default CharacterList;