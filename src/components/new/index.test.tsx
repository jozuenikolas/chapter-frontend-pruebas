import { render, screen } from "@testing-library/react"
import { FC } from "react"
import Nuevo from './index';

const nuevoProps = {
  id: 'test',
  setAttribute: ()=>('')
}
describe('Nuevo Test', () => {
  it('should show default message', async () => {
    render(<Nuevo id={nuevoProps.id} setAttribute={nuevoProps.setAttribute}/>)
    screen.getByText('Editar personaje')
  })

  it('should show default message without id', async () => {
    render(<Nuevo setAttribute={nuevoProps.setAttribute}/>)
    screen.getByText('Nuevo personaje')
  })

})

