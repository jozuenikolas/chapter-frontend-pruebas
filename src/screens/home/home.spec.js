import React from 'react';
import { render } from '@testing-library/react-native'
import HomeScreen from './home'; 

jest.mock('../../api', () => {
  getCharacters: jest.fn()
});

describe('HomeScreen', () => {
  it('should render successfully', () => {
    const component = render(<HomeScreen />);
    expect(component).toBeDefined();
  })

})