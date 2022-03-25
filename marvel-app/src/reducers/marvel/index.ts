import { AnyAction } from "redux";
import actionTypes from "../../actions/actionTypes";
import actionsTypes from "../../actions/actionTypes";

export interface marvelI {
  characters: Array<any>;
  showForm: boolean;
  filteredCharacters: Array<any>;
  selectedCharacter: any;
  loading: boolean;
  failed: boolean;
  searchCriteria: string;
  character: {
    name: string;
    nameStatus: string;
    description: string;
    descriptionStatus: string;
    url: string;
    urlStatus: string;
  };
}

const emptyCharacter = {
  name: "",
  nameStatus: "error",
  description: "",
  descriptionStatus: "error",
  url: "",
  urlStatus: "error",
};

export const INITIAL_STATE = {
  characters: [],
  showForm: false,
  filteredCharacters: [],
  selectedCharacter: null,
  loading: false,
  failed: false,
  searchCriteria: "",
  character: emptyCharacter,
};

const marvel = (
  state: marvelI = INITIAL_STATE,
  action: AnyAction = { type: null }
): marvelI => {
  switch (action.type) {
    case actionsTypes.RESET_STATE:
      return INITIAL_STATE;
    case actionTypes.TOGGLE_FORM:
      return {
        ...state,
        showForm: action.show,
        character: emptyCharacter,
      };
    case actionTypes.CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.CHARACTERS_FAILED:
      return {
        ...state,
        loading: false,
        failed: true,
      };
    case actionTypes.CHARACTERS_SUCCESS:
      console.log(action)
      return {
        ...state,
        loading: false,
        characters: action.characters,
        filteredCharacters: action.characters,
      };
    case actionTypes.UPDATE_SEARCH_CRITERIA:
      if (!action.value) {
        return {
          ...state,
          searchCriteria: "",
          filteredCharacters: state.characters,
        };
      }
      return {
        ...state,
        searchCriteria: action.value,
        filteredCharacters: state.characters.filter((character) =>
          character.title.toLowerCase().includes(action.value.toLowerCase())
        ),
      };
    case actionTypes.UPDATE_CHARACTER_NAME:
      return {
        ...state,
        character: {
          ...state.character,
          name: action.value,
          nameStatus: action.value ? "normal" : "error",
        },
      };
    case actionTypes.UPDATE_CHARACTER_DESCRIPTION:
      return {
        ...state,
        character: {
          ...state.character,
          description: action.value,
          descriptionStatus: action.value ? "normal" : "error",
        },
      };
    case actionTypes.UPDATE_CHARACTER_URL:
      return {
        ...state,
        character: {
          ...state.character,
          url: action.value,
          urlStatus: action.value ? "normal" : "error",
        },
      };
    default:
      return state;
  }
};

export default marvel;
