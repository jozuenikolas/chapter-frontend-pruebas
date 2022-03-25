import reducer, {
  setCharacters,
  setSelectedCharacter,
  addCharacter,
  editCharacter,
  deleteCharacter,
} from '../../store/charactersSlice'

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    characters: [],
    selectedCharacter: null,
  })
})

test('should set characters when empty', () => {
  const previousState = { characters: [], selectedCharacter: null }
  const characters = [
    { _id: '1', title: 'Spiderman' },
    { _id: '2', title: 'Hulk' },
  ]
  expect(reducer(previousState, setCharacters(characters))).toEqual({
    characters: characters,
    selectedCharacter: null,
  })
})

test('should set characters when not empty', () => {
  const characters = [
    { _id: '1', title: 'Spiderman' },
    { _id: '2', title: 'Hulk' },
  ]
  const previousState = { characters, selectedCharacter: null }
  const newCharacters = [
    { _id: '3', title: 'Ironman' },
    { _id: '4', title: 'BlackWidow' },
  ]
  expect(reducer(previousState, setCharacters(newCharacters))).toEqual({
    characters: newCharacters,
    selectedCharacter: null,
  })
})

test('should add character', () => {
  const characters = [
    { _id: '1', title: 'Spiderman' },
    { _id: '2', title: 'Hulk' },
  ]
  const previousState = { characters, selectedCharacter: null }
  const newCharacter = { _id: '3', title: 'Ironman' }

  expect(reducer(previousState, addCharacter(newCharacter))).toEqual({
    characters: [...characters, newCharacter],
    selectedCharacter: null,
  })
})

test('should delete character', () => {
  const characters = [
    { _id: '1', title: 'Spiderman' },
    { _id: '2', title: 'Hulk' },
  ]
  const previousState = { characters, selectedCharacter: null }
  const deleteId = '1'
  expect(reducer(previousState, deleteCharacter(deleteId))).toEqual({
    characters: [{ _id: '2', title: 'Hulk' }],
    selectedCharacter: null,
  })
})

test('should edit character', () => {
  const characters = [
    { _id: '1', title: 'Spiderman' },
    { _id: '2', title: 'Hulk' },
  ]
  const previousState = { characters, selectedCharacter: null }
  const editedCharacter = {
    _id: '1',
    title: 'Widow',
  }
  expect(
    reducer(previousState, editCharacter({ id: '1', character: editedCharacter }))
  ).toEqual({
    characters: [
      { _id: '1', title: 'Widow' },
      { _id: '2', title: 'Hulk' },
    ],
    selectedCharacter: null,
  })
})

test('should set selected Character', () => {
  const character = { _id: '1', title: 'Spiderman' }

  const previousState = { characters: [], selectedCharacter: null }

  expect(reducer(previousState, setSelectedCharacter(character))).toEqual({
    characters: [],
    selectedCharacter: character,
  })
})
