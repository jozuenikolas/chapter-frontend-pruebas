import { render, screen } from "@testing-library/react"
import { FC } from "react"
import Header from './index';

describe('Header Test', () => {
  it('should show default message', async () => {
    render(<Header />)
    screen.getByText('Listado de personajes')
  })

})

