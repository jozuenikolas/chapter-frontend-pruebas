import { render, screen } from '@testing-library/react'
import CharacterButton from '../../../components/ui/CharacterButton'

test('if props disabled=true, button should be disabled ', () => {
  render(<CharacterButton disabled={true} onClick={() => {}} />)
  expect(screen.getByRole('button')).toBeDisabled()
})

test('if props isLoading=true, button should be disabled ', () => {
  render(<CharacterButton isLoading={true} onClick={() => {}} />)
  expect(screen.getByRole('button')).toBeDisabled()
})

test('if props isLoading=true and disabled=true, button should be disabled ', () => {
  render(<CharacterButton isLoading={true} disabled={true} onClick={() => {}} />)
  expect(screen.getByRole('button')).toBeDisabled()
})

test('if props no loading and no disabled, button should be enabled ', () => {
  render(<CharacterButton onClick={() => {}} />)
  expect(screen.getByRole('button')).toBeEnabled()
})
