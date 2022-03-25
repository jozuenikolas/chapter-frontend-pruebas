import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input/Input';
import './MarvelForm.scss';

const MarvelForm = ({ onClickCancel, onClickSave, loading }) => {

    const initialStates = {
        image: '',
        body: '',
        title: ''
    };

    const [formValues, setformValues] = useState(initialStates);

    const onChangeInput = (e, field) => {
        const value = e.target.value;
        setformValues(state => ({ ...state, [field]: value }));
    };

    return (
        <div id='ct-marvel-form'>
            <h2>Nuevo Pesonaje</h2>
            <div style={{ paddingBottom: 16 }}>
                <Input
                    placeholder='Nombre'
                    label='Nombre'
                    value={formValues.title}
                    onChange={(e) => onChangeInput(e, 'title')}
                />
            </div>
            <div style={{ paddingBottom: 16 }}>
                <Input
                    placeholder='Descripcion'
                    label='Descripcion'
                    value={formValues.body}
                    onChange={(e) => onChangeInput(e, 'body')}
                />
            </div>
            <div style={{ paddingBottom: 16 }}>
                <Input
                    placeholder='Imagen'
                    label='URL'
                    value={formValues.image}
                    onChange={(e) => onChangeInput(e, 'image')}
                />
            </div>
            <div id='ct-form-buttons'>
                <Button
                    id='ct-character-edit'
                    icon='save'
                    loading={loading}
                    disabled={
                        !formValues.body ||
                        !formValues.image ||
                        !formValues.title
                    }
                    onClick={() => onClickSave(formValues)}
                >
                    Guardar
                </Button>
                <div style={{ width: 16 }} />
                <Button
                    id='ct-character-erase'
                    icon='close'
                    onClick={onClickCancel}
                >
                    Cancelar
                </Button>
            </div>
        </div>
    )
}

MarvelForm.propTypes = {
    onClickCancel: PropTypes.func.isRequired,
    onClickSave: PropTypes.func.isRequired,
    loading: PropTypes.bool
};

export default MarvelForm;