import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InputArea from '../../../components/ui/InputArea'

test('when user types, value should be what the user types  ', () => {
  render(<InputArea text="placeholder" onChange={() => {}} />)
  userEvent.type(screen.getByRole('textbox'), 'Spiderman')
  expect(screen.getByRole('textbox')).toHaveValue('Spiderman')
})

test('when no initial value, should be empty', () => {
  render(<InputArea text="placeholder" onChange={() => {}} />)
  expect(screen.getByRole('textbox')).toHaveValue('')
})

test('when initial value is given, should have that value', () => {
  render(<InputArea text="placeholder" initialValue="initialValue" onChange={() => {}} />)
  expect(screen.getByRole('textbox')).toHaveValue('initialValue')
})
