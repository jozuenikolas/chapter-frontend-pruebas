import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders app text', () => {
  render(<App />);
  const title = screen.getByText('Listado de personajes');
  expect(title).toBeInTheDocument();
});
