import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Character from './Character';

test('Character', () => {
    const onClickErase = jest.fn();
    const onClickUpdate = jest.fn();

    render(
        <Character 
            character='name'
            onClickErase={onClickErase}
            onClickUpdate={onClickUpdate}
            image='sa'
        />
    );

    expect(screen.getByText('name')).toBeInTheDocument();
    const buttons = screen.getAllByTestId('ButtonId');
    buttons.forEach(button => fireEvent.click(button));
    expect(onClickErase).toBeCalled();
    expect(onClickUpdate).toBeCalled();
});