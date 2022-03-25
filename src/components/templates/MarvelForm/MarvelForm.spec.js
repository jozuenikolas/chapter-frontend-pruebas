import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import MarvelForm from './MarvelForm';


test('MarvelForm', () => {
    const onClickCancel = jest.fn();
    const onClickSave = jest.fn();

    render(
        <MarvelForm
            onClickSave={onClickSave}
            onClickCancel={onClickCancel}
        />
    );

    expect(screen.getByText('Nuevo Pesonaje')).toBeInTheDocument();
    const inputs = screen.getAllByTestId('InputId');
    const buttons = screen.getAllByTestId('ButtonId');

    expect(buttons[0]).toBeDisabled();
    inputs.forEach(input => userEvent.type(input, 'Data'));
    expect(buttons[0]).not.toBeDisabled();
    buttons.forEach(button => fireEvent.click(button));
    expect(onClickCancel).toBeCalled();
    expect(onClickSave).toBeCalled();
});