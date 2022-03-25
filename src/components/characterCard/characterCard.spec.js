import React from 'react';
import CharacterCard from './characterdCard';
import { render } from '@testing-library/react-native';

describe('CharacterCard', () => {
  it('should renders successfully', () => {
    const character = {"_id":"623bb12b12979d2c2b04aa8f","title":"Iron Man","body":"Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.","image":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg","category":"main","idAuthor":"1","createdAt":"2022-03-03T01:37:01.828Z","updatedAt":"2022-03-03T01:37:01.828Z"};
    const component = render(<CharacterCard data={character} />);
    expect(component).toBeDefined();
  });

})