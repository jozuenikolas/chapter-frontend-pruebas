import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import SearchSection from './SearchSection';

test('SearchSection', () => {
    const onClick = jest.fn();
    const onChange = jest.fn();

    render(
        <SearchSection 
            SearchSection='name'
            onClick={onClick}
            onChange={onChange}
            inputValue=''
        />
    );

    expect(screen.getByText('Listado de personajes')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('ButtonId'));
    userEvent.type(screen.getByTestId('InputId'), 'Data');
    expect(onClick).toBeCalled();
    expect(onChange).toBeCalled();
});