import { Input, Textarea, Button } from 'components/atoms'

import './index.css'
import IForm from './interface'

function Form(
  { character, handleSave, handleCancel }: any
) {
  return (

    <div className='form'>
      <h1>Nuevo personaje</h1>

      <div className='form-fieldset'>
        <div className='title'>Nombre:</div>
        <div className='field'>
          <Input value='' handleChange={(e: any) => console.log(e.target.value)} />
        </div>
      </div>

      <div className='form-fieldset'>
        <div className='title'>Descripción:</div>
        <div className='field'>
          <Textarea />
        </div>
      </div>

      <div className='form-fieldset'>
        <div className='title'>Imagen:</div>
        <div className='field'>
          <Input value='' handleChange={(e: any) => console.log(e.target.value)} />
        </div>
      </div>

      <div className='form-button-container'>
        <div className='form-button mr'><Button icon='save' text='Guardar' handleClick={handleSave} /></div>
        <div className='form-button ml'><Button icon='cancel' text='Cancelar' handleClick={handleCancel} /></div>
      </div>
    </div>

  )
}

export default Form
