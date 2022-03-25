import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import CharacterList from './CharacterList';

const characters = [
    {
        "title": "Spider-man 1",
        "body": "With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.",
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg",
        "category": "main",
        "idAuthor": "3",
        "_id": "1"
    },
    {
        "title": "Spider-man 2",
        "body": "With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.",
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg",
        "category": "main",
        "idAuthor": "3",
        "_id": "2"
    },
    {
        "title": "Spider-man 3",
        "body": "With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man.",
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/005smp_ons_crd_02.jpg",
        "category": "main",
        "idAuthor": "3",
        "_id": "3"
    },

];

test('CharacterList', () => {
    const onClickErase = jest.fn();
    const onClickCreate = jest.fn();
    const onClickUpdate = jest.fn();

    render(
        <CharacterList
            characters={characters}
            onClickCreate={onClickCreate}
            onClickErase={onClickErase}
            onClickUpdate={onClickUpdate}
        />
    );

    expect(screen.getByText('Listado de personajes')).toBeInTheDocument();
    const buttons = screen.getAllByTestId('ButtonId');
    buttons.forEach(button => fireEvent.click(button));
    expect(onClickErase).toBeCalled();
    expect(onClickUpdate).toBeCalled();
    expect(onClickCreate).toBeCalled();
    characters.forEach(({title}) => expect(screen.getByText(title)).toBeInTheDocument());
    userEvent.type(screen.getByTestId('InputId'), '1');
    expect(screen.getByText('Spider-man 1')).toBeInTheDocument();
    expect(screen.queryByText('Spider-man 2')).not.toBeInTheDocument();
    expect(screen.queryByText('Spider-man 3')).not.toBeInTheDocument();
});