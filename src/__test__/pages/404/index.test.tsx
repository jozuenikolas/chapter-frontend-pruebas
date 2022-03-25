import { render, screen } from "@testing-library/react"
import Page404 from "../../../pages/404"

describe('Test over Page 404', () => {
  it('Should present 404 page ', () => {
    const page404 = render(<Page404></Page404>);
    screen.getAllByText(/Página no encontrada/i);
  })
})