import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input/Input';
import './SearchSection.scss';

const SearchSection = ({ onChange, onClick, inputValue }) => {
    return (
        <div>
            <h2>Listado de personajes</h2>
            <div id='ct-group'>
                <Input
                    id='ct-group-input'
                    placeholder='Buscar'
                    icon='search'
                    value={inputValue}
                    onChange={onChange}
                />
                <Button
                    id='ct-group-button'
                    icon='add'
                    onClick={onClick}
                >
                    Nuevo
                </Button>
            </div>
        </div>
    )
}

SearchSection.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired
};

export default SearchSection