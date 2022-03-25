import { render, screen } from "@testing-library/react"
import { FC } from "react"
import Button from './index';


const ButtonProps = {
  setAttribute: () => ('prueba')
}
describe('Button Test', () => {
  it('should show default message', async () => {
    render(<Button setAttribute={ButtonProps.setAttribute} />)
    screen.getByText('Nuevo')
  })

})

