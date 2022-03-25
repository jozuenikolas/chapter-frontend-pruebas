import reducer, { setCharacterState, setSearchingState } from '../../store/stateSlice'

test('on init should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    characterState: null,
    searchingState: false,
  })
})

test('should handle updating search to true', () => {
  const previousState = { characterState: null, searchingState: false }
  expect(reducer(previousState, setSearchingState(true))).toEqual({
    characterState: null,
    searchingState: true,
  })
})

test('should handle updating characterState', () => {
  const previousState = { characterState: null, searchingState: false }
  expect(reducer(previousState, setCharacterState('create'))).toEqual({
    characterState: 'create',
    searchingState: false,
  })
})
