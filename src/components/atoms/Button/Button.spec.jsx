import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from './Button';

test('Button disabled', () => {
    const onClick = jest.fn()
    render(
        <Button disabled={true} onClick={onClick}>
            Texto de prueba
        </Button>
    );

    fireEvent.click(screen.getByTestId('ButtonId'));
    expect(screen.getByTestId('ButtonId')).toBeDisabled();
    expect(screen.getByTestId('ButtonId')).toHaveTextContent('Texto de prueba');
    expect(onClick).toHaveBeenCalledTimes(0);
})

test('Button enabled', () => {
    const onClick = jest.fn()
    render(
        <Button disabled={false} onClick={onClick}>
            Texto de prueba
        </Button>
    );

    fireEvent.click(screen.getByTestId('ButtonId'));
    expect(screen.getByTestId('ButtonId')).not.toBeDisabled();
    expect(screen.getByTestId('ButtonId')).toHaveTextContent('Texto de prueba');
    expect(onClick).toHaveBeenCalledTimes(1);
})

test('Button loading', () => {
    const onClick = jest.fn()
    render(
        <Button disabled={false} loading={true} onClick={onClick}>
            Texto de prueba
        </Button>
    );

    fireEvent.click(screen.getByTestId('ButtonId'));
    expect(screen.getByTestId('ButtonId')).toBeDisabled();
    expect(screen.getByTestId('ButtonId')).not.toHaveTextContent('Texto de prueba');
    expect(onClick).toHaveBeenCalledTimes(0);
})