import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Personaje from './Personaje';

const personaje = {
    id: "623bb12b12979d2c2b04aa92",
    title: "Iron Man",
    body: "Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.",
    image: "https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg",
    category: "main",
    idAuthor: "4",
    createdAt: "2022-03-03T01:37:01.828Z",
    updatedAt: "2022-03-03T01:37:01.828Z"
};

test('Should render personajes', async () => {
    render(
        <Personaje
            id={personaje.id}
            title={personaje.title}
            image={personaje.image}
        />
        
    );
    expect(screen.getByTestId('personajeTestId')).toBeInTheDocument();
    expect(screen.getByText('Iron Man')).toBeInTheDocument();
    expect(screen.getByTestId('personajeImageTestId')).toBeInTheDocument();
    expect(screen.getByText('edit')).toBeInTheDocument();
    expect(screen.getByText('delete')).toBeInTheDocument();
});